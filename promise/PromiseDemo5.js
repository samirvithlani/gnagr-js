var user;

function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Received")
        },3000)
    })
}

getData().then((data)=>{
    console.log(data)
    user = data;
    console.log("user..",user)
}).catch((error)=>{
    console.log(error)
})

console.log("user..",user)