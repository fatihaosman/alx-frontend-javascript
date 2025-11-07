interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Fatiha",
  lastName: "Osman",
  age: 22,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Amina",
  lastName: "Ali",
  age: 23,
  location: "Mombasa"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

