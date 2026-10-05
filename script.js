// 1. Currying & Uncurrying

// 1. Curried function — sum of 3 numbers
 function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
} 
sum (10)(20)(30) // 60

// 2. Curried function — name, department, salary
function employee(name){
  return function (department){
    return function (salary){
      console.log("name:",name , "department:",department, "salary:",salary);
    }
  }
}
employee("Aalan")("IT")(45000);

// 3. Curried function — multiplication
function multiply(a){
  return function(b){
    return function (c){
      console.log(a * b * c);
    }
  }
}
multiply(2)(3)(4); // 24

// 4. Convert curried function to uncurried
// Curried
function curried(a){
  return function(b){
    return function(c){
      console.log(a+b+c);
    }
  }
}
curried(10)(20)(30);

// Uncurried
function uncurried(a,b,c){
  console.log(a+b+c);
}
uncurried(10,20,30);

// 5. Curried and uncurried — add 4 numbers
// Curried
function curried(a){
  return function(b){
    return function(c){
      return function(d){
      console.log(a+b+c+d);
      }
    }
  }
}
curried(10)(20)(30)(40); // 100

// Uncurried
function uncurr(a,b,c,d){
  console.log(a+b+c+d);
}
uncurr(10,20,30,40); // 100


// 2. Spread Operator

// 6. Merge two arrays
let array1 = [10, 20, 30, 40, 50];
let array2 = [60, 70, 80, 90, 100];
let result = [...array1, ...array2];
console.log(result);

// 7. Merge student names
let student1 = ["Aalan", "Bryant", "Karthi"];
let student = ["Kabi", "Naveen", "Abiraja"];
let student = [...student1, ...student2];
console.log(student);

// 8. Original values + 3 new values
let array = [10, 20, 30];
let newArray = [...array, 40, 50, 60];
console.log(newArray);

// 9. Merge two employee objects
let employee1 = { name: "Aalan", department: "IT" };
let employee2 = { salary: 45000, experience: 2 };
let employee = { ...employee1, ...employee2 };
console.log(employee);

// 10. Copy employee and add salary
let employee = { name: "Aalan", department: "IT" };
let newEmployee = { ...employee, salary: 50000 };
console.log(newEmployee);

// 11. Combine two objects
let object1 = { name: "Aalan", age: 24 };
let object2 = { city: "Chennai", department: "IT" };
let result = { ...object1, ...object2 };
console.log(result);

// 12. Reverse two arrays using spread
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = [...array2, ...array1];
console.log(result); // [4, 5, 6, 1, 2, 3]


// 3. Rest Operator in Functions

// 13. Two fixed values + remaining values
function example(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}
example(10, 20, 30, 40, 50);

// 14. student(name, department, ...marks)
function student(name, department, ...marks) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}
student("Aalan", "IT", 80, 90, 85, 95);

// 15. Two numbers + additional numbers
function number(a, b, ...rest) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Additional:", rest);
}
numbers(10, 20, 30, 40, 50);

// 16. Print the 5th value from rest
function value(a, b, ...rest) {
    console.log(rest[4]);
}
values(10, 20, 30, 40, 50, 60, 70);

// 17. Product, price, remaining values
function Details(product, price, ...rest) {
    console.log("Product:", product);
    console.log("Price:", price);
    console.log("Remaining:", rest);
}
Details("Laptop", 50000, "Dell", "Black", "16GB RAM");

// 18. Receive 10 numbers and store values after first two
function numbers(a, b, ...rest) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", rest);
}
numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// 4. Array Destructuring

// 19. Extract 4 values
let array = [10, 20, 30, 40];
let [a, b, c, d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 20. Extract student details
let student = ["Aalan", "IT", 85];
let [name, department, mark] = student;
console.log(name);
console.log(department);
console.log(mark);

// 21. Extract first and fourth values
let numbers = [10, 20, 30, 40, 50];
let [first, , , fourth] = numbers;
console.log(first);
console.log(fourth);

// 22. Nested array destructuring
let array = [10, [20, 30]];
let [a, [b, c]] = array;
console.log(a);
console.log(b);
console.log(c);

// 23. Three-level nested destructuring
let array = [10, [20, [30, 40]]];
let [a, [b, [c, d]]] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// 5. Object Destructuring

// 24. Employee object
let employee = {
    name: "Aalan",
    designation: "Front End Developer",
    salary: 45000
};
let { name, designation, salary } = employee;
console.log(name);
console.log(designation);
console.log(salary);

// 25. Student object
let student = {
    name: "Aalan",
    department: "IT",
    cgpa: 8.5
};
let { name, department, cgpa } = student;
console.log(name);
console.log(department);
console.log(cgpa);

// 26. Extract only 3 of 5 properties
let employee = {
    name: "Aalan",
    age: 24,
    department: "IT",
    salary: 45000,
    city: "Chennai"
};
let { name, department, salary } = employee;
console.log(name);
console.log(department);
console.log(salary);

// 27. Nested employee and team details
let company = {
    employee: {
        name: "Aalan"
    },
    team: {
        members: ["Karthi", "Kabilan", "Naveen"]
    }
};
let {
    employee: { name },
    team: { members }
} = company;
console.log(name);
console.log(members);

// 28. Company → department → employee
let company = {
    department: {
        employee: {
            name: "Aalan"
        }
    }
};
let {
    department: {
        employee: { name }
    }
} = company;
console.log(name);


// 6. Array Manipulation

// 29. Add 3 fruits using push()
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "Papaya", "Guava"); 
console.log(fruits);

// 30. Remove last value using pop()
let numbers = [10, 20, 30, 40, 50];
numbers.pop();
console.log(numbers);

// 31. Remove first student using shift()
let students = ["Aalan", "Karthi", "Kabilan", "Naveen", "Abiraja"];
students.shift();
console.log(students);

// 32. Add 2 numbers at beginning using unshift()
let numbers = [30, 40, 50, 60];
numbers.unshift(10, 20);
console.log(numbers);

// 33. Replace 30 with 100 using splice()
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 100);
console.log(numbers);

// 34. Remove 2 values from the middle
let array = [10, 20, 30, 40, 50, 60];
array.splice(2, 2);
console.log(array);

// 35. Add 3 values in the middle
let array = [10, 20, 60, 70];
array.splice(2, 0, 30, 40, 50);
console.log(array);

// 36. Remove 2 and add 3 at same position
let array = [10, 20, 30, 40, 50];
array.splice(2, 2, 100, 200, 300);
console.log(array);

// 37. Remove one student from middle
let students = ["Aalan", "Karthi", "Kabilan", "Naveen", "Abiraja"];
students.splice(2, 1);
console.log(students);

// 38. Shopping cart — push, pop, shift, unshift
let cart = ["Laptop", "Mouse", "Keyboard"];
cart.push("Monitor");
console.log(cart);
cart.pop();
console.log(cart);
cart.shift();
console.log(cart);
cart.unshift("Mobile");
console.log(cart);


// 7. Array Merge & Extraction Methods

// 39. Merge two arrays using concat()
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let result = array1.concat(array2);
console.log(result);

// 40. Merge three arrays
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];
let result = array1.concat(array2, array3);
console.log(result);

// 41. Extract index 2 to index 5 using slice()
let array = [10, 20, 30, 40, 50, 60, 70, 80];
let result = array.slice(2, 6);
console.log(result); // [30, 40, 50, 60]

// 42. Extract first 3 students
let students = ["Aalan", "Karthi", "Kabilan", "Naveen", "Abiraja"];
let result = students.slice(0, 3);
console.log(result);

// 43. Three-level nested array → single level
let array = [1, [2, [3, 4]]];
let result = array.flat(2);
console.log(result); // [1, 2, 3, 4]

// 44. Four-level nested array → single level
let array = [1, [2, [3, [4, 5]]]];
let result = array.flat(3);
console.log(result); // [1, 2, 3, 4, 5]

// 45. Difference between slice() and splice()
// slice() does NOT modify original array
let array1 = [10, 20, 30, 40, 50];
let result1 = array1.slice(1, 3);
console.log(result1); // [20, 30]
console.log(array1);    // [10, 20, 30, 40, 50]

// splice() modifies original array
let array2 = [10, 20, 30, 40, 50];
let result2 = array2.splice(1, 2);
console.log(result2); // [20, 30]
console.log(array2);    // [10, 40, 50]


// 8. Search & Other Array Methods

// 46. Check whether 50 exists using includes()
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(50)); // true

// 47. Find first occurrence using indexOf()
let numbers = [10, 20, 30, 20, 40, 20];
console.log(numbers.indexOf(20)); // 1

// 48. Find last occurrence using lastIndexOf()
let numbers = [10, 20, 30, 20, 40, 20];
console.log(numbers.lastIndexOf(20)); // 5

// 49. Sort an array of numbers
let numbers = [50, 10, 40, 20, 30];
numbers.sort((a, b) => a - b);
console.log(numbers); // [10, 20, 30, 40, 50]

// 50. Reverse an array
let numbers = [10, 20, 30, 40, 50];
numbers.reverse();
console.log(numbers); // [50, 40, 30, 20, 10]
