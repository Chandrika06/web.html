
const note = [
    {
      userId: 12345,
      userNotes: "djhjkkjk hjkh gjlk cathy123"
    
    },
    {
      userId: 55555,
      userNotes: "fredbucghj xhyki artrk rger"
      
    },
    {
      userId: 23412,
      userNotes: "bobgkk lll kl ill byjones"
      
    }
  ];
  
  function getAllNotes() {
    return note;
  }
  
  function Notes(note) { 
    let cUser = users.filter( u => u.userId === user.userId);
    
    if(!cUser[0]) throw Error("Username not found");
    return cUser[0];
  }
  
  module.exports = { getAllNotes, Notes };