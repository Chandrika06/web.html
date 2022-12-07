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
    constructor(userName, password, fullName) {
      this.userName = userName;
      this.password = password;
      this.fullName = fullName;
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
    let user = new User(userName, password);
  
    fetchData("/users/login", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "Notes.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
  }
   
  // register functionality
  let regForm = document.getElementById("register-Form");
  if(regForm) regForm.addEventListener('submit', register);
  
  function register(e) {
    e.preventDefault();
  
    let userName = document.getElementById("username").value;
    let userfName = document.getElementById("fname").value;
    let userlName = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let user = new User(userName, userfName, userlName, password);
  
    fetchData("/users/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "login.html";
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  
  // logout event listener
  let logout = document.getElementById("logout-btn");
  if(logout) logout.addEventListener('click', removeCurrentUser)
  
  // stateful mechanism for user
  // logging in a user
  function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // getting current user function
  // FIX this next class
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  // logout function for current user
  function removeCurrentUser() {
    localStorage.removeItem('user')
  }

/*
class User{
    constructor(fname,lname,name,password,notes){
        this.userfName = fname;
        this.userlName = lname;
        this.username = name;
        this.userpassword = password;
        this.usernotes = notes;

        
    }
    getUserfName(){
        return this.userfName;
    }
    getUserlName(){
        return this.userlName;
    }
    getUserPassword(){
        return this.userpassword;
    }
    getUsername(){
        return this.username;
    }
    getUsernotes(){
        return this.usernotes;
    }
    setUserfName(fname){
        this.userfName=fname;
    }
    setUserlName(lname){
        this.userlName=lname;
    }
    setUserPassword(password){
        this.userpassword = password;
    }
    setUsername(name){
        this.username=name;
    }
    setUsernotes(notes){
        this.usernotes=notes;
    }
}

const registerForm = document.getElementById("register-Form");

if(registerForm) registerForm.addEventListener('submit',addUser);

function addUser(e){
    e.preventDefault();
    let Username = document.getElementById("username").value;
    let UserfName = document.getElementById("fname").value;
    let UserlName = document.getElementById("lname").value;
    let UserPassword = document.getElementById("password").value;

    console.log(`username:${Username}`);
    console.log(`userFname:${UserfName}`);
    console.log(`username:${UserlName}`);
    console.log(`username:${UserPassword}`);
} 


const login = document.getElementById("login-page");

if(login) login.addEventListener('submit', displayLogin);


function displayLogin(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(`username = ${username}`);
  console.log(`password = ${password}`);

}

const form = document.getElementById("note-form");
if(form)form.addEventListener('submit',displayNote);

function displayNote(e){
    e.preventDefault();
    let notes = document.getElementById("text-area").value;
    console.log(`Note: ${notes}`);
}


const notebtn = document.getElementById("notes-btn");
if(notebtn) notebtn.addEventListener('click',getNotes);

function getNotes(){
    fetch("http://localhost:3000/users/")
    //.then((res)=> res.json())
    .then((data1) => console.log(data1))
    .catch((err)=> console.log(err))
}



const user_btn = document.getElementById("users-btn");
if(user_btn) user_btn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users/")
    //.then((res)=> res.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
}
*/
