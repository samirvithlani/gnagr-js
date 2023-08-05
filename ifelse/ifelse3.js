var age = 2;

if (age>=18){
    console.log("You are eligible to vote");

    if(age>=21){
        console.log("You can also marrige");
    }
    else{
        console.log("You can not marrige");
    }
}
else{
    console.log("You are not eligible to vote");
    if(age>=10){
        console.log("You are eligible for school");
    }
    else{
        console.log("stay at home");
    }
}