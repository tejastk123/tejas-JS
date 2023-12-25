// object extraction, object destructuring

const course = {
    courseName: "Js in Hindi",
    price: "999",
    teacher: "Hitesh",
}

// console.log(course.courseName); // when we have to print many times this value, we will not use this

const {teacher} = course // we extract teacher from course
console.log(teacher);
