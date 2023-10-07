
const h1 = document.getElementById("print")
// setTimeout(()=>{
//         h1.innerHTML = "Bye"
// }, 2000)

var x = setInterval(()=>{
    console.log("Hello")
    
},2000)

//clear interval
setTimeout(()=>{
    clearInterval(x)
    console.log("clear interval")
},10000)


