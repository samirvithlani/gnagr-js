var student = {
    name:"amit",
    email:"amit@gmail.com",
    age:20,

    address:{
        city:"delhi",
        state:"delhi",
        country:"india",
        pincode:110001
    },
    qualification:{
        school:"st. xaviers",
        college:"st. xaviers",
        university:"delhi university"
    },
    hobbies:["music","sports","reading"],
}

console.log(student);
console.log(student.name);
console.log(student.email);
console.log(student.age);
console.log(student.city); //undefined
console.log(student.state); //undefined
console.log(student.country);//undefined
console.log(student.pincode);//undefined
console.log(student.address);
console.log(student.address.city);
console.log(student.address.state);
console.log(student.address.country);
console.log(student.address.pincode);
console.log(student.qualification);

console.log(student.qualification.school);
console.log(student.qualification.college);
console.log(student.qualification.university);
console.log(student.hobbies);

for(let i=0;i<student.hobbies.length;i++){
    console.log(student.hobbies[i]);
}