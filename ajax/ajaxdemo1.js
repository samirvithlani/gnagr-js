// const ajaxDemo1 = () => {


//         const xhr = new XMLHttpRequest();
        
//         //read data from file
//         xhr.open("GET","demo.txt",true); //true for async
//         xhr.send();
//         xhr.onload = () =>{
//             // console.log(xhr.responseText);
//             userObj = JSON.parse(xhr.responseText);
//             console.log(userObj);
//         }

        


// }

//ajaxDemo1();


// function writeDataToFile() {
//     var empObj = {
//         name: "Rajan",
//         age: 25,
//         salary: 25000
//     };

//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "writeToFile.php", true);
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.send(JSON.stringify(empObj));
// }
writeDataToFile();