class Group {

    constructor() {
         this.studentsList = [];
    }
    addStudent(student) {
        this.studentsList.push(student);
    }
    static getStudent() {
        return this.studentsList;
    }

    getAverageMark() {
        return (this.studentsList.reduce((acc, student) => {
            acc+= (student.marks.reduce((acc, mark) => {
             acc+= mark;
             return acc
            },0)) / student.marks.length
            return acc
        },0) / this.studentsList.length)
    }
}

class Student {
    constructor(name,marks) {
        this.name = name;
        this.marks = marks;
    }
}

const jhon = new Student('jhon',[3,4,6,8])
const jhon2 = new Student('jhon2',[5,6,8,1])
const jhon3 = new Student('jhon3',[5,5,5,3])
const jhon4 = new Student('jhon',[10,10,4,3])

console.log(jhon)
console.log(jhon2)
console.log(jhon3)
console.log(jhon4)

const group1 = new Group()
group1.addStudent(jhon)
group1.addStudent(jhon2)
group1.addStudent(new Student('IVAN',[1,0,0,2]))


console.log(group1)
console.log(group1.getAverageMark())
console.log(group1.getStudent())