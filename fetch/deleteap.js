const deleteData = async () => {

    const url = "https://reqres.in/api/users/2"
    const res = await fetch(url,{

        method: "DELETE",
        
    })
    console.log(res);
    
}
deleteData();