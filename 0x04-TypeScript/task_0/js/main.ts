interface studentsData  {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: studentsData = {
    firstName: 'EnGentech',
    lastName: 'Inyang',
    age: 35,
    location: 'Ikot Ibiok, Eket'
}

let student2: studentsData = {
    firstName: 'Kingsley',
    lastName: 'Chime',
    age: 49,
    location: 'Onitcha, Enugu'   
}

let studentsList = [student1, student2]

let table = document.createElement('table')