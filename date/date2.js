var today = new Date();
var tomorrow = new Date();
console.log(today);
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow);

//compare dates

console.log("today>tomorrow",today > tomorrow);
console.log(today < tomorrow);
console.log(today == tomorrow);