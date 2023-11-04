const getData = () => {

   return new Promise((res,rej)=>{

        setTimeout(()=>{
            res({status:"success",data:"Hello World"})
            //rej({status:"error",data:"Hello World"})
        },5000)
    })

}

// console.log("Start")
// var x = getData()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// console.log("End")


const allData = ()=>{



    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res({status:"success",data:"Hello World"})
            //rej({status:"error",data:"Hello World"})
        },5000)
    })
}


const callData =async ()=>{


    var x =  await getData()
    console.log(x)
    console.log(x.data)

    var y = await allData()
    console.log(y)


}
callData()