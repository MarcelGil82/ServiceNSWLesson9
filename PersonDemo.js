const path = require("path");
const StudentDataReader = require("./StudentDataReader");

let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));

console.log(_studentData.getStudent('bf37e12c-dade-4197-bd4f-c0bb16bc7805'));

// let teachers = Teacher.generateRandomPeople(10);
// let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));
// console.log (teachers);
// console.log (students);

// console.log(teachers[0].getMyStudents(students));
// console.log(students[0].getTeacher(teachers));

// fs.writeFileSync(path.join(__dirname, "Teachers.json"), JSON.stringify(teachers));
// fs.writeFileSync(path.join(__dirname, "Students.json"), JSON.stringify(students));