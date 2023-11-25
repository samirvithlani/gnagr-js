const fetchUserData = () => {
  //api...fetch()

  console.log("fetching user data");
  fetch("https://reqres.in/api/users?page=2", { method: "GET" })
    .then((res) => {
      res.json().then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => {
      console.log(err);
    });
    console.log("fetching user data end..");
};

fetchUserData();
//call back hell