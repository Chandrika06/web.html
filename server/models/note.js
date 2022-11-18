const notes = [
  {
    userId: 12345,
    noteId:56,
    userNote: "cathy123",
    
  },
  {
    userId: 55555,
    noteId:5656,
    userNote: "fredburger",
    
  },
  {
    userId: 23412,
    noteId:5656,
    userNote: "bobbyjones",
    
  }
];

function getNotes() {
  return notes;
}

let getNotes = () =>notes
module.exports = { getNotes, login };