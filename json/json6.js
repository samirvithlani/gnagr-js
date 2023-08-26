var products =[
    {
        id:1,
        name:"marker",
        colors:["red","green","blue"]

    },
    {
        id:2,
        name:"pen",
        colors:["red","green"]
    }
]

products = products.map((product)=>{
    return{
        id:product.id*2,
        name:product.name.toUpperCase(),
        
        colors:product.colors.map((col)=>{
            return col.toUpperCase();
        })
    }
})
console.log(products);