//function for a welcome msg

const welcomeMsg = (user) => {
  console.log(
    `Hy ${user} welcome to NasonexStores.com go through our products and add to your cart`
  );
};
//declaration of empty cart
const cart = [];
//boolean to checkmate
let already = false;

//Adding items to the empty cart function
const addItem = (item) => {
  if (cart.includes(item)) {
    console.log(`${item} already exist`);
  } else {
    cart.push(item);
    console.log(`You have just added ${item} to your cart.`);
  }
};

//displaying added items  function
const displayAddedItem = (user) => {
  if (cart.length > 0) {
    console.log(
      `Thank you ${user} for shopping with us here at NasonexStores.com !`
    );
    console.log(`Here is you chosen product ${cart}`);
  } else {
    console.log(
      "Sorry, it seems your cart is empty. Please add items to your cart in order to checkout from the store."
    );
  }
};

//removing  added items  function
const removeAddedItem = (item) => {
  if (cart.length > 0) {
    if (cart.includes(item)) {
      already = true;
      console.log(`${item} already in the cart`);
      const index = cart.indexOf(item);
      cart.splice(index, 1);
      console.log(`You have just removed ${item} from your cart.`);
    } else {
      console.log("Sorry, no items in your cart");
    }
  }
};

//checkOut current items  functio
const checkOut = (user) => {
  if (cart.length > 0) {
    console.log(
      `Thank you ${user} for shopping with us here at NasonexStores.com !`
    );
    console.log(`These are the items you are purchasing: ${cart}.`);
    console.log(`Goodbye! ${user}! see you next time`);
  } else {
    console.log(
      "Sorry, it seems your cart is empty. Please add items to your cart in order to checkout from the store."
    );
  }
};

welcomeMsg("Daniel");
addItem("trouser");
addItem("polo");
addItem("polo");
addItem("sneaker");
addItem("Alienware M15");
removeAddedItem("polo");
displayAddedItem("Daniel");
checkOut("Daniel");
