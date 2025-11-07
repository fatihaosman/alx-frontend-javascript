interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
}

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. Printing teachers

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

 function printTeacher(firstName, lastName) =>$
  return `${firstName.charAt(0)}. ${lastName}`;
};


// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
