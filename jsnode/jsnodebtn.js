function btnclick(data) {
    console.log("button clicked",data);
    
}

function bindBUtton() {
    var divtag = document.getElementById("demo");
    var btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    divtag.appendChild(btn);
    btn.addEventListener('click', ()=>{
        btnclick("java");
    })
}

var products =[
    {
        id:1,
        name:"Laptop",
    },
    {
        id:2,
        name:"Mobile",
    }
]

function addToCart(product){

    console.log("Add to cart",product);

    var cart = document.getElementById("cart");
    var ptag = document.createElement("p");
    ptag.innerHTML = product.id + " " + product.name;
    cart.appendChild(ptag);

}

function loadProducts() {

    var prod = document.getElementById("products");
    for(let i=0;i<products.length;i++){
        var ptag = document.createElement("p");
        ptag.innerHTML = products[i].id + " " + products[i].name;
        prod.appendChild(ptag);

        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        prod.appendChild(btn);

        btn.addEventListener('click',()=>{
            addToCart(products[i]);
        })
    }
    


}