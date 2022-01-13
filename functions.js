// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, once } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQ4nUKgA_8nYXQhfVM6bT0Q5iHxXwtho",
  authDomain: "cygnusspin-internship-staff.firebaseapp.com"   ,
  databaseURL: "https://cygnusspin-internship-staff-default-rtdb.firebaseio.com",
  projectId: "cygnusspin-internship-staff",
  storageBucket: "cygnusspin-internship-staff.appspot.com",
  messagingSenderId: "249814012478",
  appId: "1:249814012478:web:e1bd3c78edd247b49b776f",
  measurementId: "G-C9DLJEY292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const datebase = getDatabase(app);

addBtn.addEventListener('click',(e) => {
 
let userId = document.getElementById('userId');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var salary = document.getElementById('salary'); 

var addBtn = document.getElementById('addBtn');



function writeUserData(userId, fname, lname, salary) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId.value), {
        userId: userId.value,
        firstName: fname.value,
        lastName: lname.value,
        salary : salary.value
    });

    alert('data stored successfully')

    }
    writeUserData(userId, firstName, lastName, salary)
}); 

update.addEventListener('click',(e) => {

var userId = document.getElementById('userId');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var salary = document.getElementById('salary'); 

function writeNewPost(userId, fname, lname, salary) {
    const db = getDatabase();

    // A post entry.
    const postData = {
        userId: userId.value,
        firstName: fname.value,
        lastName: lname.value,
        salary : salary.value
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    alert('data updated successfully')

    return update(ref(db), updates);

    writeNewPost(userId, firstName, lastName, salary)
}
})

