// Student Information
const student1 = {
    firstName: "Haylie",
    middleName: "Gacusan",
    lastName: "Antolin",
    birthdate: "August 21, 2006",
    birthplace: "San Rafael, San Esteban, Ilocos Sur, 2706",
    address: "San Rafael, San Esteban, Ilocos Sur, 2706",
    course: "Bachelor of Science in Computer Science 1st Year",
    dreamJob: "Software Engineer"
};

// Classmate 1
const student2 = {
    firstName: "Jhonelle",
    middleName: "Macamay",
    lastName: "Galleta",
    birthdate: "January 23, 2006",
    birthplace: "Paoc Norte, Sta. Lucia, Ilocos Sur, 2712",
    address: "Paoc Norte, Sta. Lucia, Ilocos Sur, 2712",
    course: "Bachelor of Science in Computer Science 1st Year",
    dreamJob: "Programmer"
};

// Classmate 2
const student3 = {
    firstName: "Divine Rachelle",
    middleName: "Robosa",
    lastName: "Callejo",
    birthdate: "May 15, 2006",
    birthplace: "San Juan District Hospital, Ilocos Sur, 2712",
    address: "Nangalisan, Sta. Lucia, Ilocos Sur, 2712",
    course: "Bachelor of Science in Computer Science 1st Year",
    dreamJob: "Software Engineer"
};

// Function to format and print student details
function printStudentInfo(student) {
    console.log(`[${student.firstName.toUpperCase()} ${student.middleName.toUpperCase()} ${student.lastName.toUpperCase()}] was born [${student.birthdate}] at [${student.birthplace}], and currently living at [${student.address}]. [${student.firstName.toLowerCase()} ${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()}] is taking up [${student.course}] and dreams to be [${student.dreamJob}] after graduation.\n`);
}

// Printing information of all students
printStudentInfo(student1);
printStudentInfo(student2);
printStudentInfo(student3);