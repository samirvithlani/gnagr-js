var user = "Amit Thakkar"

//0 1 
//user = user.slice(0,4)
user = user.slice(0,7)
console.log(user)


//add char at the end
// user = user.concat("#")
// console.log(user)

// //add char at the start
// user = "#".concat(user)
// console.log(user)

//add char to specific index
user = user.slice(0,2).concat("*").concat(user.slice(1))
console.log(user)
