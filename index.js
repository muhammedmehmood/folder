// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNaTxQq_vsCNRYSRV665riVu5d6E3RsNg",
  authDomain: "vepsite-95126.firebaseapp.com",
  databaseURL: "https://vepsite-95126-default-rtdb.firebaseio.com",
  projectId: "vepsite-95126",
  storageBucket: "vepsite-95126.appspot.com",
  messagingSenderId: "530127689302",
  appId: "1:530127689302:web:1325f95a6fbba769934df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database and Auth
const db = getDatabase(app);
const auth = getAuth(app);

// Reference to the Firebase Realtime Database
const vepsiteDB = ref(db, "Hackathone");

// Event listener for form submission
document.getElementById('marksForm').addEventListener("button", Submit);

// Function to handle form submission
function button(e) {
  e.preventDefault(); // Prevent the default form submission behavior

  var Course = getElementVal('Course');
  var studentId = getElementVal('studentId');
  var marks = getElementVal('marks');
  var totalMarks = getElementVal('totalMarks');
  var grade = getElementVal('grade');

  // Save the user to authentication system
  //createUserWithEmailAndPassword(auth, email, password)
    //.then((userCredential) => {
      // User created successfully, save additional data to Firebase
      saveData(Course, studentId, marks, totalMarks, grade, );
      console.log("User added successfully");
    }//)
 
// Function to save data to Firebase
const saveData = ( Course, studentId, marks, totalMarks, grade) => {
  var newdedt = push(HackathoneDB); // Create a new entry in the database
  set(newdedt, {
    Course: Course,
    studentId: studentId,
    marks: marks,
    totalMarks: totalMarks,
    grade: grade,
  });
};

// Helper function to get the value of an element by ID
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
