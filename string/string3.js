var data = "hello this is india and india is india"

var x = data.split(" ")
console.log(x)

data = data.replace("india","USA")
console.log(data)

//replace all occurance
data = data.replaceAll("india","USA")
console.log(data)

data = data.repeat(1)
console.log(data)

var profile = "ajay mehta"
var inc = profile.includes(" ",0,profile.length)
console.log(inc)

var stw = profile.startsWith("a")
console.log(stw)
var domain = "gmail.in"
var enw = domain.endsWith(".com") || domain.endsWith(".in") || domain.endsWith(".org")
console.log(enw)