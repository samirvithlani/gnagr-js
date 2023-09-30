document.getElementById("btn").addEventListener('click',()=>{
    console.log("Button Clicked");
})
document.getElementsByClassName("bg-primary-subtle")[0].addEventListener('mouseover',()=>{

    document.getElementsByClassName("bg-primary-subtle")[0].className="bg-primary";
    console.log("Mouse Hovered");

})