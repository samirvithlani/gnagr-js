//array array index starts with 0
var lang = "java"
console.log(lang[0]);
var len = lang.length;
console.log(len);

for(let i=0;i<len;i++){
    console.log(lang[i]);
}

//string methods
lang = lang.toUpperCase();
console.log("language.....",lang)
lang = lang.toLowerCase();
console.log("language.....",lang)

var email = "  samir@gmail.com  "
console.log(email.length);
email = email.trim();
//email = email.trimStart();
//email = email.trimEnd();
console.log(email.length);
console.log(email);


// var pname = "raj"
// pname[0] = pname[0]="R"
// console.log(pname)

var pname = "raja"
console.log(pname[0])
console.log(pname.charAt(0))

var ind = pname.indexOf("a")
console.log("index...",ind)
var ind1 = pname.lastIndexOf("a")
console.log("index...",ind1)

//pname = pname.concat("kumar")
//pname = pname + "kumar"
//console.log(pname)




