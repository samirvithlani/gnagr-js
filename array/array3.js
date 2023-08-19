var lang = ["hindi","english","sanskrit","english","malayalam"]
lang.unshift("tamil","telugu")


function sortBylen(a,b){

    return a.length - b.length
}

//lang.sort()
lang.sort(sortBylen)
console.log(lang)

var salary =[11,33,44,56,6,5,43,2,1,0,99,890,72]

function sortNum(a,b){
    return a-b
}

salary.sort(sortNum)
console.log(salary)