let students = [
    {name : "John Doe", age : 20},
    {name : "Jane Doe", age : 22},
    {name : "Jim Doe", age : 24},
    {name : "Jack Doe", age : 26},
    {name : "Jill Doe", age : 28}
]

function addStudent(nam, ag){
    students.push({name : nam, age : ag})
}
function removeStudent(nam){
    students = students.filter((student) => student.name !== nam)
}
function updateStudent(nam, ag){
    students = students.map((student) => {
        if(student.name === nam){
            student.age = ag
        }
        return student
    })
}
function listStudents(){
    students.forEach((element, students) => {
        console.log(element.name + " : " + element.age)
    })
}

listStudents()
addStudent("Tom Doe", 30)
listStudents()
removeStudent("Jim Doe")
listStudents()
updateStudent("John Doe", 25)
listStudents()