
//callback hell

function printData(){


    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data Printed")
        },3000)

    })
}

function getData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data Received")
        },3000)

    })
}

getData().then((data)=>{
    console.log(data)
    return printData()
})
.then((data)=>{
    console.log(data)
})

