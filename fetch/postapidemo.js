const getData =(event)=>{

    event.preventDefault();
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    addUser(name,job);
}

const addUser = async (name,job) => {



    const res = await fetch("https://reqres.in/api/users",{
        method: "POST",
        body: JSON.stringify({
            name: name,
            job: job
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const data = await res.json();
    console.log(data);
    launch_toast()



}


function launch_toast() {
    var x = document.getElementById("toast")
    var desc = document.getElementById("desc")
    desc.innerHTML = "User Added Successfully"
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}