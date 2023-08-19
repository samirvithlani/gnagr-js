var cities = ["London", "Paris", "New York", "Mumbai","Luxor","Lucknow"];

var removeCity =(name)=>{


    //return cities.filter((city)=>city!=name);
    return cities.filter((city)=>{
        return city!=name;
    })

}
var filcity = removeCity("Paris");
console.log(filcity);