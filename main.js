
class User{
    constructor(fname,lname,name,password){
        this.userfName = fname;
        this.userlName = lname;
        this.username = name;
        this.userpassword = password;

        
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
    setUserName(fname){
        this.userfName=fname;
    }
    setUserName(lname){
        this.userlName=lname;
    }
    setUserPassword(password){
        this.userpassword = password;
    }
    setUsername(name){
        this.username=name;
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
    console.log(`Notes: ${notes}`);
}

/*const register = document.getElementById("register-Form");
if(register) register.addEventListener('submit',displayUser)

function displayUser(e){
    e.preventDefault();
    let UserfName = document.getElementById("fname").value;
    let UserlName = document.getElementById("lname").value;
    let Username = document.getElementById("username").value;
    let UserPassword = document.getElementById("password").value;

    console.log(`Userfname=${UserfName}`);
    console.log(`Userlname=${UserlName}`);
    console.log(`Username=${Username}`);
    console.log(`Password=${UserPassword}`);
    console.log(displayUser)
}
*/






    
    
    







/*const noteForm = document.getElementById("note-form");
if(noteForm) noteForm.addEventListener('Submit',displaynote);
function displaynote(e){
    e.preventdefault();
    let text = document.getElementById("notes").Value;
    console.log(`Text = ${text}`);
}
*/

/*

const note =document.getElementById("page-space");

if(note) note.addEventListener('submit',displayNote);

function displayNote(e){
    e.preventDefault();
    var textarea = document.getElementById("note-space").value;

    console.log(`text = ${textarea}`);

const login = document.getElementById("login-page");

if(login) login.addEventListener('submit', displayLogin);


function displayLogin(e) {
  e.preventDefault();
  let username = document.getElementById("Username").value;
  let password = document.getElementById("password");
  console.log(`username = ${username}`);
  console.log(`password = ${password}`);

}

const note =document.getElementById("page-space");

if(note) note.addEventListener('submit',displayNote);

function displayNote(e){
    e.preventDefault();
    var textarea = document.getElementById("note-space").value;

    console.log(`text = ${textarea}`);*/