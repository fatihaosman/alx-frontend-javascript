interface Teacher {
<<<<<<< HEAD
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

// Function implementation
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}


// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
 
// 4. Writing a class

// Interface describing the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
=======
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
>>>>>>> Add task_1 Teacher interface implementation

