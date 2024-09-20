  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8iyZec6kx3knMrsTc6BhDV6DS2TyYVcM",
    authDomain: "result-484b7.firebaseapp.com",
    projectId: "result-484b7",
    storageBucket: "result-484b7.appspot.com",
    messagingSenderId: "41666821797",
    appId: "1:41666821797:web:d53fd1682254ce1fc6974c",
    measurementId: "G-T84PQ2MB77"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
function uploadMarks() {
    // Get input values from the form
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    const grade = document.getElementById('grade').value;

    // Validate inputs
    if (!course || !studentId || !marks || !totalMarks || !grade) {
        alert('Please fill in all fields.');
        return;
    }

    // Add data to the table
    const table = document.getElementById('marksTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = course;
    newRow.insertCell(1).innerHTML = studentId;
    newRow.insertCell(2).innerHTML = marks;
    newRow.insertCell(3).innerHTML = totalMarks;
    newRow.insertCell(4).innerHTML = grade;

    // Clear the form after submission
    document.getElementById('marksForm').reset();
}