const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Amit",
        marks: 89,
    },
    {
        name: "Prakash",
        marks: 92,
    },
    {
        name: "Narendra",
        marks: 88,
    },
    {
        name: "Sonali",
        marks: 90,
    },
]

function checkResults (name) {
    for (let student of students) {
        if (student.name === name) {
            if (student.marks >= 90) {
                console.log(`Congratulations ${name} you have cleared the exam`);
            }
            else  {
                console.log(`Sorry ${name} you have not cleared the exam`);
            }
            return 
        }
    }
    console.log(`${name}, you are an invalid user`);
}
checkResults("Narendra")
checkResults("Sonali")
checkResults("Salman")