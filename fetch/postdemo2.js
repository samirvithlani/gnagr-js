const postDemo2 = async () => {
    
    const url = "https://gorest.co.in/public/v2/users"
    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify({
            name:"Rama",
            gender:"male",
            email:"rama12@gmail.com",
            status:"active"
        }),
        headers:{
            "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5",
            "Content-type": "application/json"
        }
    })

    const data = await res.json();
    console.log(data);
}
postDemo2();