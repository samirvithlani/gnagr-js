function isEmplty(value) {
  if (value.trim() === "" || value === null || value === undefined) {
    return true;
  }
  return false;
}

function handleSubmit(event) {
  //prevent the default behaviour of the form
  event.preventDefault();

  //document.getElementById("sub").setAttribute("disabled", "disabled");

  console.log("form submitted");
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;

  //validate the form
  if (isEmplty(name)) {
    document.getElementById("name").style.border = "2px solid red";
    //document.getElementById("name").focus();
    document.getElementById("nameError").innerHTML = "Name is required";
  } else {
    document.getElementById("name").style.border = "2px solid green";
    document.getElementById("nameError").innerHTML = "";
  }
  if (isEmplty(age)) {
    document.getElementById("age").style.border = "2px solid red";
    document.getElementById("ageError").innerHTML = "Age is required";
  } else {
    document.getElementById("age").style.border = "2px solid green";
    document.getElementById("ageError").innerHTML = "";
  }
  if (isEmplty(email)) {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("emailError").innerHTML = "Email is required";
  } else {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("emailError").innerHTML = "";
  }
  

  document.getElementById("nametd").innerHTML = name;
  document.getElementById("agetd").innerHTML = age;
  document.getElementById("emailtd").innerHTML = email;
}
