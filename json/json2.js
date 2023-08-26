var products =[
    {
        id:1,
        name:"iphone 14",
        brand:"apple",
        price:100000,

        category:{
            id:1,
            name:"electronics",
            subcategory:{
                id:1,
                name:"mobile"
            }

        },
        status:true,
        availableColors:["red","blue","black","white"],
        availableCap:[128,256,512],
    },
    {
        id:2,
        name:"POLO T-SHIRT",
        brand:"POLO",
        price:1000,

        category:{
            id:2,
            name:"fashion",
            subcategory:{
                id:2,
                name:"t-shirt"
            }

        },
        status:true,
        availableColors:["red","blue","black","white"],
        availableSize:["S","M","L","XL","XXL"],
    },
    {
        id:3,
        name:" dell laptop",
        brand:"dell",
        price:80000,

        category:{
            id:1,
            name:"electronics",
            subcategory:{
                id:2,
                name:"laptop"
            }

        },
        status:true,
        availableColors:["red","blue","black","white"],
        availableCap:[128,256,512],
        ram:"8gb",
    }
]

for(let i=0;i<products.length;i++){
    //console.log(products[i]);
    console.log("ID",products[i].id);
    console.log("NAME",products[i].name);
    console.log("BRAND",products[i].brand);
    console.log("PRICE",products[i].price);
    console.log("CATEGORY",products[i].category);
    console.log("CATEGORY ID",products[i].category.id);
    console.log("CATEGORY NAME",products[i].category.name);
    console.log("SUBCATEGORY",products[i].category.subcategory);
    console.log("SUBCATEGORY ID",products[i].category.subcategory.id);
    console.log("SUBCATEGORY NAME",products[i].category.subcategory.name);
    console.log("STATUS",products[i].status);
    console.log("AVAILABLE COLORS",products[i].availableColors);
    for(let j=0;j<products[i].availableColors.length;j++){
        console.log("COLOR",products[i].availableColors[j]);
    }
    console.log("AVAILABLE CAP",products[i].availableCap);
    if(products[i].availableCap!==undefined){
       for(let k=0;k<products[i].availableCap.length;k++){
        console.log("CAP",products[i].availableCap[k]);
        }
    }
    else{
        for(let k=0;k<products[i].availableSize.length;k++){
            console.log("SIZE",products[i].availableSize[k]);
        }
    }
    console.log("---------------------------");
}

