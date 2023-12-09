
const deleteUserData = async (id) => {

    //delete api///
    const url = "https://node5.onrender.com/user/user/"+id;
    const res = await fetch(url,{
        method: "DELETE",
    })
    console.log(res);
    
    //refresh the page
    location.reload(); //reload the page


}


const createTable = async (data) => {


        const tbody = document.getElementById("tbody");

        for(let i=0;i<data.data.length;i++){

            const tr = document.createElement("tr");
            const tdId = document.createElement("td");
            const tdName = document.createElement("td");
            const tdEmail = document.createElement("td");
            const tdAge = document.createElement("td");
            const tdIsActive = document.createElement("td");
            const tdDelete = document.createElement("td");

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.addEventListener("click",()=>{
                deleteUserData(data.data[i]._id);
            })

            tdId.innerHTML = data.data[i]._id;
            tdName.innerHTML = data.data[i].name;
            tdEmail.innerHTML = data.data[i].email;
            tdAge.innerHTML = data.data[i].age;
            tdIsActive.innerHTML = data.data[i].isActive;
            tdDelete.appendChild(deleteButton);
            
            


            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdAge);
            tr.appendChild(tdIsActive);
            tr.appendChild(tdDelete);

            tbody.appendChild(tr);


        }



}

const fetchUserData = async () => {
    
    const url = "https://node5.onrender.com/user/user"
    //_id,name,email,age,isActive
    const res = await fetch(url,{
        method: "GET",
    })
    const data = await res.json();
    console.log(data);

    createTable(data);

}
fetchUserData();


const addUserData = async () => {


    const obj = {
        name:"amit",
        email:"amit@gmail.com",
        age:23,
        isActive:true
    }

    const url = "https://node5.onrender.com/user/user"
    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const data = await res.json();
    console.log(data);
    location.reload(); //reload the page

}