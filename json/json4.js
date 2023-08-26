var users =[
    {
        id:1,
        name:"ram",
        email:"Ram@gmail.com"
    },
    {
        id:2,
        name:"neha",
        email:"neha@gmail.coM"
    },
    {
        id:3,
        name:"jay",
        email:"jay@gmaiL.com"
    }
]

users = users.map((user)=>{
    //return user.name.toUpperCase();
    return {
        id:user.id,
        name:user.name.toUpperCase(),
        email:user.email.toLowerCase()
    }
})
console.log(users);