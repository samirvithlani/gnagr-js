var data = [11,22,33,45,67,87,655,44]

function isEven(n){
    return n%2==0
}

var ans = data.some(isEven)
var ans1 = data.every(isEven)
console.log(ans)
console.log(ans1)

var userName = ["raj","jay","parth","priya","neha"]

function isStartsWith(n,elm){

    console.log("n...",n)
    console.log("elm...",elm)
    return elm.startsWith(n)
}

// function checkLen(n,elm){

//     return n.length>=3

// }
function checkLen(n,elm){

    return elm.length>=n

}

var ans2 = userName.some(isStartsWith.bind(this,"p"))
console.log("ans 2",ans2)


//var ans3 = userName.every(checkLen)
var ans2 = userName.every(checkLen.bind(this,3))
console.log("ans 3",ans2)




function isStartsWithandlen(n1,n2,elm){

    return elm.startsWith(n1) && elm.length>=n2

}


var ans4 = userName.some(isStartsWithandlen.bind(this,"p",4))

console.log("ans 4",ans4)