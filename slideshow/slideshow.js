const images =["iphone13.jpg","iphone14.jpg","iphone15.jpg"]
let currentIndex =0;

const prevBuutton = document.getElementById("prev");
const nextBuutton = document.getElementById("next");
const image = document.getElementById("image");

prevBuutton.addEventListener("click",()=>{
    
    currentIndex = (currentIndex-1+images.length)%images.length;
    image.src = "../images//"+images[currentIndex];

  //  document.getElementById("imgtest").innerHTML=   images[currentIndex];
})
nextBuutton.addEventListener("click",()=>{
    // 0 = (0+1) % 3 = 1
    currentIndex = (currentIndex+1)%images.length;
    image.src = "../images//"+images[currentIndex];
    //document.getElementById("imgtest").innerHTML=   images[currentIndex];
})

image.addEventListener('mouseover',()=>{

    currentIndex = (currentIndex+1)%images.length;
    image.style.width = "500px";
})
image.addEventListener('mouseout',()=>{

    currentIndex = (currentIndex+1)%images.length;
    image.style.width = "300px";
})

