const Teacher = require("./Teacher");
const fs = require("fs");

module.exports = class TeacherDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getArrayFromFile() {
        let bufferFromFile = fs.readFileSync(this.fileName); // reads a buffer from file
        let fileAsString = bufferFromFile.toString(); // turns buffer to characters and "string"
        let objects = JSON.parse(fileAsString); // from JSON "string" to javascript as an object (could be an array or string)
        let teachers = objects.map(obj => new Teacher ( // creates new object
            obj.firstName,
            obj.lastName,
            obj.age,
            obj.id  // id must be provided here, if not it will not match the file with current id's
        ));
        return teachers; // return objects above 
    }

    saveArrayToFile(teachers) {
        let teachersAsJSON = JSON.stringify(teachers);
        fs.writeFileSync(this.fileName,teachersAsJSON);
    }

    getTeacherById(id) {
        let teachers = this.getArrayFromFile();
        return teachers.find(teacher => teacher.id == id);
    }
    updateTeacher(teacherToUpdate) {
        let teachers = this.getArrayFromFile(); // update a teacher
        let updatedTeachers = teachers.map(teacherInArray => {
            if(teachInArray.id == teacherToUpdate.id){ // finds the i.d
                return teacherToUpdate; // changes teacher
            } else {
                return teacherInArray; // leaves file as it was 
            }
        });
        this.saveArrayToFile(updatedTeachers);
    }

    deleteTeacher(id) {
    let newTeacherArray = this.getArrayFromFile().fiter(teacher => teacher.id != id); // get the id of teacher and returns the list without the id selected.
    this.saveArrayToFile(newTeacherArray);
    }

    addTeacher(teacher) {
        let newTeacherArray = this.getArrayFromFile();
        newTeacherArray.push(teacher);
        this.saveArrayToFile(addTeacherArray);;
    }
}