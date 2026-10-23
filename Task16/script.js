
const students = [
    {
        name: "Aarav Sharma",
        marks: 88,
        class: "12th",
        address: "Pune, Maharashtra"
    },
    {
        name: "Priya Patil",
        marks: 92,
        class: "12th",
        address: "Nashik, Maharashtra"
    },
    {
        name: "Rahul Verma",
        marks: 76,
        class: "11th",
        address: "Mumbai, Maharashtra"
    },
    {
        name: "Sneha Kulkarni",
        marks: 95,
        class: "12th",
        address: "Nagpur, Maharashtra"
    },
    {
        name: "Arjun Singh",
        marks: 81,
        class: "11th",
        address: "Delhi, India"
    },
    {
        name: "Ananya Deshmukh",
        marks: 67,
        class: "10th",
        address: "Kolhapur, Maharashtra"
    }
];

const studentList = document.getElementById("student-list");
const search = document.getElementById("search");

function displayStudents(studentArray) {
    if (studentArray.length === 0) {
        studentList.innerHTML =
            '<p class="no-results">No students found.</p>';
        return;
    }

    studentList.innerHTML = studentArray.map(student => `
        <div class="student-card">
            <h2>${student.name}</h2>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");
}

search.addEventListener("input", function () {
    const searchText = search.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );

    displayStudents(filteredStudents);
});

displayStudents(students);
