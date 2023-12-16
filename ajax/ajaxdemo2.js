//API -->backedn --> server --> database --> API // URL -->

//readyState exchange between client and server

//1) open a connection readyState = 1 //onloadstart
//2) send request readyState = 2  //onloadstart
//3) server process the request readyState = 3 //onProgress
//4) server send the response readyState = 4   //onLoad
//5) client receive the response readyState = 4 //onLoad

//status code HTTP STATUS CODE --> 404

//GET, POST, PUT, DELETE
//GET --> fetch data from server
//POST --> send data to server
//PUT --> update data on server
//DELETE --> delete data from server


function getApiCallDemo(){



    const xhr = new XMLHttpRequest()
    xhr.open("GET","https://reqres.in/api/users?page=2",true)
    xhr.send()
    xhr.onloadstart = () =>{
        console.log("onloadstart")
    }
    
    xhr.onload = () =>{
        console.log(xhr.responseText)
        var userObj = JSON.parse(xhr.responseText)
        console.log(userObj)
    }
    
}

//getApiCallDemo()
const postApiCallDemo = () => {

    const xhr = new XMLHttpRequest()

    var userObj = {
        name: "Rajan",
        job: "Software Developer"
    }
    xhr.open("POST","https://reqres.in/api/users",true)
    xhr.setRequestHeader("Content-type","application/json")
    xhr.send(JSON.stringify(userObj))
    xhr.onload = () =>{
        console.log(xhr.responseText)
    }

}
//postApiCallDemo()

const getUserApiCallDemo = () => {


    const xhr = new XMLHttpRequest()
    xhr.open("GET","https://node5.onrender.com/user/user",true)
    xhr.send()
    xhr.onload = () =>{
        //console.log(xhr.responseText)
        var userObj = JSON.parse(xhr.responseText)
        console.log(userObj)
    }


}

getUserApiCallDemo()

const postUserApiCallDemo = () => {


    const user = {
        name:"vishal",
        age: 25,
        email:"vishal@gmail.com",
        isActive: true
    }

    const xhr = new XMLHttpRequest()
    xhr.open("POST","https://node5.onrender.com/user/user",true)
    xhr.setRequestHeader("Content-type","application/json")
    xhr.send(JSON.stringify(user))
    xhr.onload = () =>{
        console.log(xhr.responseText)
    }


}

//postUserApiCallDemo()
