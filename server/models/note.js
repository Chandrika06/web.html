let getNotes = () => notes;

    module.exports = { getNotes }
    
    const con = require("./db_connect.js");
    
    async function createTable(){
        let sql = `CREATE TABLE IF NOT EXISTS notes ( 
            noteID INT NOT NULL AUTO_INCREMENT,
            noteContent VARCHAR(255),
            userID INT NOT NULL,
            CONSTRAINT notes_pk PRIMARY KEY (noteID),
            CONSTRAINT note_fk FOREIGN KEY (userID) REFERENCES users(userID)
        )`;
        await con.query(sql);
    }
    createTable();
    
    //get all notes
    async function getAllNotes(){
        const sql = `SELECT * FROM notes;`;
        let notes = await con.query(sql);
       return notes;
    }
    getAllNotes();
    
    //create notes
    async function createNote(note){
  
        let sql=`INSERT INTO notes (noteContent,userID) VALUES ("${note.noteContent}","${note.userID}");`;
      
       await con.query(sql);
      return {message:"Successfully added notes"};
      return cNote[0];
      
      }
   //read notes
    async function fetch(note){
        let cNote = await getNote(note);
        let sql = `SELECT users.userName, notes.noteContent
      FROM users,notes 
      
      WHERE users.userID=notes.userID;
      `;
        if(!cNote[0]) throw Error("Note not found");
        return cNote[0];
    }
       //Useful functions
       async function getNote(note){
        let sql;
        if (note.userID){
            sql=`SELECT * FROM notes
            WHERE userID = ${note.userID}`;
        } else {
            sql = `
            SELECT * FROM notes 
              WHERE noteID = "${note.noteID}"
          `;
          }
        return await con.query(sql);
    }
    
    //update note
    async function editNote(note){
        let sql = `UPDATE notes
          SET noteContent = "${note.noteContent}"
          Where noteID = ${note.noteID};
        `;
        await con.query(sql);
        let updatedNote = await getNote(note);
        return updatedNote[0];
    
    }
    //Delete note
    async function deleteNote(note){
        let sql = `DELETE FROM notes
        WHERE noteID = ${note.noteID}`;
    await con.query(sql);
    }
    module.exports = {getAllNotes,fetch,deleteNote,getNote,editNote,createNote};
