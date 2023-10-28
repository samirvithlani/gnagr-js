
function test(){

    return 100;
}

test()

function getData(){

    return new Promise((sucess,failure)=>{

        setTimeout(()=>{
            //sucess("Data Received")
            failure("Error")
        },3000)

    })
}

// var x = getData()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// })
// x.catch((error)=>{
//     console.log(error)
// })


getData().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})