// My Variable declearation:
let studentName = "John";
let assignment1 = 75
let assignment2 = 88
let finalExam = 81

// Assignment average calculation:
let assignmentAverage = (assignment1 + assignment2) / 2;

//Final Grade calculation - weighted average (40% assignments, 60% final exam)
let finalGrade = assignmentAverage * 0.4 + finalExam * 0.6;


let hasPassed = finalGrade >= 70;

let isExcellent = assignmentAverage >=70 && finalExam >=90;

//Result 
console.log(`Student Name: ${studentName}`);
console.log(`Final Grade: ${finalGrade}`);
console.log(`Passed: ${hasPassed}`)
console.log(`Excellent Performance: ${isExcellent}`);

