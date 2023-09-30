function check(){

    var p = document.getElementsByName("check")
    console.log(p);
    for(i in p){
        // console.log(p[i].innerHTML);
        if(p[i].innerHTML!=undefined){
        if(p[i].innerHTML.includes("bomb")|| p[i].innerHTML.includes("here")){
            //add mark tag
            p[i].innerHTML = "<mark>"+p[i].innerHTML+"</mark>";
        }
        }
    }


}