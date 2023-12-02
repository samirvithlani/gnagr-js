const getAPICallDemo = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  });
  console.log(res); //convert the response to json

  const data = await res.json();
  console.log(data.data);

//   for (let i = 0; i < data.data.length; i++) {
//     console.log(data.data[i].first_name);
//   }



  //get tbody....

  const tbody = document.getElementById("tbody");
  for(let i=0;i<data.data.length;i++){

    const tr = document.createElement("tr");

    const idTd = document.createElement("td");
    idTd.innerHTML = data.data[i].id;
    const nameTd = document.createElement("td");
    nameTd.innerHTML = data.data[i].first_name;
    const lastNameTd = document.createElement("td");
    lastNameTd.innerHTML = data.data[i].last_name;
    const imageTd = document.createElement("td");
    const image = document.createElement("img");
    image.src = data.data[i].avatar;
    imageTd.appendChild(image);

    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(lastNameTd);
    tr.appendChild(imageTd);
    tbody.appendChild(tr);
  }
  
};

getAPICallDemo();
