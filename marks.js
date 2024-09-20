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