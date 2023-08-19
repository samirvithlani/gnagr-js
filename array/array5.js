var cities = ["London ", " Paris", " New York ", "  Mumbai  ","Luxor","Lucknow"];

// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }

//city cities[i]
cities.forEach((city)=>{
    console.log(city);
})

cities = cities.map((city)=>{
    return city.toUpperCase();
})
console.log(cities);

cities = cities.map((city)=>{
    return city.trim();
})
console.log(cities);

// var fillarry =[]

// for(let i=0;i<cities.length;i++){

//     if(cities[i].startsWith("L")){
//         fillarry.push(cities[i]);
//     }

// }
// console.log(fillarry);

var fillarry = cities.filter((city)=>{
    return city.startsWith("L");
})
console.log(fillarry);

var fillarry = cities.filter((city)=>city.startsWith("L") && city.length>5);
console.log(fillarry);




