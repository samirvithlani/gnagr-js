var lang = ["hindi","english","sanskrit","english","malayalam"]
lang = lang.concat("tamil","telugu")
console.log(lang)

//var flag  = lang.includes("english",1,lang.length)
var flag  = lang.includes("english")
console.log(flag)

var ind = lang.indexOf("english")
console.log("index...",ind)

var ind = lang.lastIndexOf("english")
console.log("last index...",ind)

lang.reverse()
console.log(lang)


