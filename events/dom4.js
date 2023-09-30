function changeColor(){

    var box = document.getElementsByClassName("box");
    
    
    
    for(i in box){
        //0,1,2
        if(i%3==0){
            box[i].style.backgroundColor = "orange";
        }
        else if(i%3==1){
            box[i].style.backgroundColor = "white";
            box[i].style.border = "1px solid black";
            var h1 =document.getElementsByTagName("h1");
            for(j in h1){
                h1[j].innerHTML = "INDIA";
            }
        }
        else{
            box[i].style.backgroundColor = "green";
        }
    }

}