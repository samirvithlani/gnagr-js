
var products = [
    {
        id:1,
        name:"Samsung S6",
    },
    {
        id:2,
        name:"Samsung S7",
    },
    {
        id:3,
        name:"Samsung S8",
    },
    {
        id:4,
        name:"Samsung S9",
    }
]


function deleteProduct(prducts){
    console.log(prducts);
    console.log(id);
    products = products.filter((pro)=>{
        return pro.id != id;
    })

}

const loadProducts = () => {

    
console.log(products);
    var proddiv = document.getElementById("products");
    for(let i=0;i<products.length;i++){
        proddiv.innerHTML += products[i].name + "<br>";
        var btn = document.createElement("button");
        btn.innerHTML = "del"
        proddiv.appendChild(btn);
      
    }
    btn.addEventListener("click",function(){
        deleteProduct(products);
    })
    

}