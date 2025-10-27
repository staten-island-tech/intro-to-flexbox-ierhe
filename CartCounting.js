let prod = {
    title: "Cooking With Fire"
}

const cart = [];
function createCartObject(product){
    const cartProduct = { ...product, quanitity: 1 };
    return cartProduct
}
function checkCart(prod) {
    if (!prod) {
        return;
    }
    //create cart object here
    const cartProduct = { ...prod, quanitity: 1 };
    const found = cart.find((cartItem) => cartItem.title === cartProduct.title);
    if (found) {
        found.quantity += 1;
    } else {
        cart.push(cartProduct);
    }
}
//function addToCart
checkCart(prod);
checkCart(prod);
console.log(cart);

let cartTotal = 0; 
cart.forEach((item) => (cartTotal = cartTotal + item))
console.log(cartTotal)