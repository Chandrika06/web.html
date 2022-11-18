
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
if(notebtn)notebtn.addEventListener('click',getNotes);

function getNotes(){
    fetch("http://localhost:3000/notes/")
    .then((res)=> res.json())
    .then((data1) => console.log(data1))
    .catch((err)=> console.log(err))
}



const user_btn = document.getElementById("users-btn");
user_btn.addEventListener('click',getUsers);

function getUsers(){
    fetch("http://localhost:3000/users/")
    .then((res)=> res.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
}

