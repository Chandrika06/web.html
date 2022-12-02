
const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    userID INT NOT NULL AUTO_INCREMENT,
    noteID NUMERIC;
    note_content VARCHAR(25500) NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

async function write_notes(note) {
  let cnote = await getnote(note.userID);
  if(cnote.length > 0) throw Error("noteID already in use");

  const sql = `INSERT INTO notes (noteID, note_content)
    VALUES ("${note.noteID}", "${note.note_content}");
  `
  await con.query(sql);
  return await login(note);
}

async function getAllnotes() {
   const sql = `SELECT * FROM notes;`;
   let notes = await con.query(sql);
   console.log(notes)
}

getAllnotes();

async function getnote(userID) {
  let sql = `
    SELECT * FROM notes 
      WHERE noteID = "${userID}"
  `;

  return await con.query(sql);  
}

module.exports = { getAllnotes,write_notes };


/*const notes = [
  {
    noteId: 12345,
    noteId:56,
    noteNote: "cathy123",
    
  },
  {
    noteId: 55555,
    noteId:5656,
    noteNote: "fredburger",
    
  },
  {
    noteId: 23412,
    noteId:5656,
    noteNote: "bobbyjones",
    
  }
];

let getNote = () => notes;
module.exports={getNote}
function getNotes() {
  return notes;
}

function login(notes) { // {note:note}
  let cnote = note.filter( u => u.noteID === notes.noteID);
  
  if(!cnote[0]) throw Error("noteID not found");
  if(cnote[0].note_content !== notes.note_content) throw Error("note_content incorrect");

  return cnote[0];
}

module.exports = { getNote, note };
*/
