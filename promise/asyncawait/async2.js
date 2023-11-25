const fetchData = () => {

    
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({name:'John',age:30});
        },3000)
    })
    
}


async function fetchUser(){

    console.log("fetching user data start");
    const user = await fetchData();
    console.log(user);
    console.log("fetching user data end..");
    

}
fetchUser();

// console.log("fetching user data start");
// fetchData().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log("fetching user data end..");