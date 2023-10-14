

var pizza = [
    {
        id:1121,
        name:"7 Cheese Pizza",
        image:"https://thefusionpizza.in/wp-content/uploads/2021/12/SEVEN-7-CHEESE-PIZZA01-scaled.jpg",
        detail:{
            crust:[
                {
                    name:"Thin Crust",
                    price: 100
                },
                {
                    name:"Thick Crust",
                    price: 200
                }
            ],
        }
    },
    {
        id:1122,
        name:"Farm House Pizza",
        image:"https://vegplatter.in/files/public/images/partner/catalog/125/Farm%20House%20Pizza.jpg",
        detail:{
            crust:[
                {
                    name:"Thin Crust",
                    price:80
                },
                {
                    name:"Thick Crust",
                    price: 150
                }
            ],
        }
    }
]

var orderArray = [];
function getCart(){
    pizzaOrder();
}
var bill = 0;
function pizzaOrder(order){

    
    orderArray.push(order);
    console.log(order);
    console.log(orderArray);

    var pizzaCart = document.getElementById("pizza-cart");
    console.log(pizzaCart);
    for(let i=0;i<orderArray.length;i++){

        var pizzaCard = document.createElement("div");
        pizzaCard.className = "pizza-card";

        //title
        var pizzaTitle = document.createElement("h1");
        pizzaTitle.innerHTML = orderArray[i]?.name;
        pizzaCard?.appendChild(pizzaTitle);

        //image
        var pizzaImage = document.createElement("img");
        pizzaImage.className = "pizza-image";
        pizzaImage.src = orderArray[i]?.image;
        pizzaCard?.appendChild(pizzaImage);
        
        //crust
        var pizzaCrust = document.createElement("h4");
        pizzaCrust.innerHTML = orderArray[i]?.crust;
        pizzaCard?.appendChild(pizzaCrust);

        //price
        var pizzaPrice = document.createElement("h4");
        pizzaPrice.innerHTML = orderArray[i]?.price;
        pizzaCard?.appendChild(pizzaPrice);
    
        pizzaCart.appendChild(pizzaCard);

        bill = bill + orderArray[i]?.price;
        
    }
    var billtag = document.getElementById("bill");
    billtag.innerHTML = bill;

}


function getProducts(){


    var pizzaContainer = document.getElementById("pizza-container");
    for(let i=0;i<pizza.length;i++){

        var pizzaCard = document.createElement("div");
        pizzaCard.className = "pizza-card";

        var pizzaTitle = document.createElement("h1");
        pizzaTitle.innerHTML = pizza[i].name;

        //create img tag..

        var pizzaImage = document.createElement("img");
        pizzaImage.className = "pizza-image";
        pizzaImage.src = pizza[i].image;

        //crust details..
         
        pizzaCard.appendChild(pizzaTitle); //box
        pizzaCard.appendChild(pizzaImage); //box pizza image...

        
        //console.log(pizza[i].detail?.crust?.length);
        for(let k=0;k<pizza[i].detail?.crust?.length;k++){
            var crustName = document.createElement("h4");
            var crustPrice = document.createElement("h4");

            //button starts

            var btn = document.createElement("button");
            btn.className = "btn btn-primary";
            btn.innerHTML = "Add to Cart";

            btn.addEventListener("click",function(){
                var order = {
                    id:pizza[i].id,
                    name:pizza[i].name,
                    image:pizza[i].image,
                    crust:pizza[i].detail.crust[k].name,
                    price:pizza[i].detail.crust[k].price
                }
                pizzaOrder(order);
            })

            //button ends

            crustName.innerHTML = pizza[i].detail.crust[k].name;
            pizzaCard.appendChild(crustName);
            pizzaCard.appendChild(btn);

            crustPrice.innerHTML = pizza[i].detail.crust[k].price;
            pizzaCard.appendChild(crustPrice);
            // pizzaCard.appendChild(btn);
        }
    
        

        //price details..

       

        pizzaContainer.appendChild(pizzaCard);




    }



}