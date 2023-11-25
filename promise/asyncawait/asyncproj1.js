const placeOrder = async () => {
  console.log("place order start");
  console.log("order is accepted");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: 1234567890, message: "order placed successfully" });
    }, 1000);
  });
};

const payment = async () => {
  console.log("payment start");
  console.log("payment is processing");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "success",
        tId: "1234567890",
        message: "payment successfull",
      });
    }, 3000);
  });
};

const selectFood = async () => {
  console.log("select food start");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "pizza", price: 200 });
    }, 4000);
  });
};

async function zomato() {
  const foodData = await selectFood();
  //console.log(foodData);
  const paymentData =  await payment(foodData.price);
  console.log(paymentData);
  if (paymentData.status == "success") {
    const orderdData = await placeOrder({ data: foodData });
    console.log(orderdData.message);
  }
}

zomato();
