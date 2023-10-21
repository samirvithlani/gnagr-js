//geo location

function getLocation() {

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("position",position);
            console.log(position.coords);
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });

    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}
getLocation();