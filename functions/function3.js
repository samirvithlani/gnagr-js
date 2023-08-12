const outer = () => {

    const inner = () => {
        console.log("I am inner function");
    }

    inner()    
}
outer()


const userData = (name)=>{

    const studentData = ()=>{

        console.log("student name - ",name)
        return "student data added...."
    }
    var st = studentData()
    console.log(st)

    return "user data added...."
}
var x = userData("John")
console.log(x)



//amit,23
const person = (name,age)=>{


    const user = (uname)=>{

            return uname.toUpperCase()
    }

    return user(name)

}
var x =  person("amit",23)
console.log(x)



const test =(a,b)=>{


    return a + b;
}

var y = test(10,20)
console.log(y)

const test1 = (a,b)=> a + b
var z = test1(100,200)
console.log(z)