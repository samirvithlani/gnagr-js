var marks = [12,34,56,78,45,23]
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])

for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

var len = marks.length
console.log("len...",len)

var pushed = marks.push(100)
console.log("pushed...",pushed)
console.log("marks...",marks)

var removedelm = marks.pop()
console.log("removedelm...",removedelm)

var unsh = marks.unshift(200)
console.log("unsh...",unsh)
console.log("marks...",marks)

var shi = marks.shift()
console.log("shi...",shi)


console.log("marks...",marks)

//marks.splice(3,0,77,66,88)
//marks.splice(1,1)
//marks.splice(1,2,100)
marks.splice(4,1,100,200,300,400)
console.log("marks...",marks)


