const cart = ["laptop", "phone", "chocolate"];

// calling createOrder which will return a promise
// once order is created, we need to proceed to payment
createOrder(cart)
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Donee!!")
  })

// we can have catch specific to a single then as well
// catch need not be generic


/* Implementations */

function createOrder(cart) {
  // creating a new promise
  const pr = new Promise((resolve, reject) => {
    // validate cart
    if (!validateCart(cart)) {
      // throw an error
      const err = new Error("Cart is not valid!");
      reject(err);
    }

    const orderId = "3423";

    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });

  return pr;
}

function validateCart() {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful")
  }) 
}
