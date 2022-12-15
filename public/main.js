async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

// user class
class User {
  constructor(userName,password,firstName,lastName) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName=lastName;
    
    
  }

  getUsername() {
    return this.userName;
  }
}


// login functionality
let loginForm = document.getElementById("login-page");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = new User(userName,password);
//console.log(user)
  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 
}
 
// register functionality
let regForm = document.getElementById("register-form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("Uname").value;
  let userFname = document.getElementById("fname").value;
  let userLname = document.getElementById("Lname").value;
  
  let password = document.getElementById("password").value;
  let user = new User(userName, userFname, userLname, password);
  console.log(user)
  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    alert("registration success")
    window.location.href = "note.html";
  })
  .catch((err) =>{
    console.log(err);
  })
}
//Note Functionality
class Note{
  constructor(noteContent) {
    this.noteContent = noteContent;
  }
  getNotes() {
    return this.noteContent;
  }
}
let user=getCurrentUser();
let note = document.getElementById("noteForm");
if(note) note.addEventListener('submit',notePageFunction)
function notePageFunction(e){
  e.preventDefault();
  let noted= document.getElementById('note').value;
  const note = new Note(noted);
  note.userID = user.userID;
  fetchData("/notes/create", note, "POST")
  .then((data) => {
    //setCurrentUser(data);
    alert("note added")
    window.location.href = "note.html";
  })
  .catch((err) =>{
    console.log(err);
  })
document.getElementById("noteForm").reset();
}
if(user&&note) getallnotes();

function getallnotes(){
let notedata =document.getElementById('note');
fetchData("/notes/getNote",user,"POST")
.then((data)=>{
  console.log(data);
  for(let i=0;i<data.length;i++){
    notedata.value+=data[i].noteContent;
  }
})
}
