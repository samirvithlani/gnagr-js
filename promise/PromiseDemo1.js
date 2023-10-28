
function getData(){


        //reslove and reject are functions

        var promise = new Promise((reslove,reject)=>{

            setTimeout(()=>{
                //console.log("Data Received")
                console.log("3000 sec done...")
               // reslove("Data Received")
               reject("Error")
            },3000)
        })

        console.log(promise) //pending
        console.log("Hello")

        promise.then((data)=>{
            console.log("promise resolved.....",data)
        })
        promise.catch((error)=>{
            console.log("promise rejected.....",error)
        })

        console.log("Hi")

        
}

getData()
