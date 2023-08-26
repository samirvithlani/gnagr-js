var cities = ["London", "Paris", "New York", "Mumbai","Luxor","Lucknow"];

var removeCity =(name)=>{


    //return cities.filter((city)=>city!=name);
    return cities.filter((city)=>{
        return city!=name;
    })

}
var filcity = removeCity("Paris");
console.log(filcity);


//find the city which has length greater than 5
//find the city which has length greater than 5 and starts with L
//find the city which has length greater than 5 and starts with L and ends with n
//find the city starts with 'a,e,i,o,u' and sort it..