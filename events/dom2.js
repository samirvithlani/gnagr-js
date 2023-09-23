function changeColor(){

    var box = document.getElementsByClassName("box");
    
    console.log(box);
    for(i in box){
        if(i%2==0){
            box[i].style.backgroundColor = "yellow";
        }
        else{
            box[i].style.backgroundColor = "green";
        }
    }
}