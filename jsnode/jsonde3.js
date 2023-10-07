var products =[
    {
        id:1,
        name:'Laptop',
        price:198000,
    },
    {
        id:2,
        name:'Mobile',
        price:18000,
    },
    {
        id:3,
        name:'TV',
        price:8000,
    },
    {
        id:4,
        name:'Watch',
        price:6000,
    }
]

function loadProducts(){

    var productsdiv = document.getElementById("products")
    
    for(let product of products){
        let ptag = document.createElement("p");
        let btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        ptag.innerHTML = product.id + " " + product.name + " " + product.price;
        productsdiv.appendChild(ptag);
        productsdiv.appendChild(btn);
    }

}