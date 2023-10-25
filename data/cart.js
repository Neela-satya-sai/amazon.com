export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart= [{
          productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity : 2
        },{
          productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity : 1 
        }];
}


function saveToLocalStorage(){
      localStorage.setItem('cart', JSON.stringify(cart));
      
}

export function addToCart(productId){
  let matchingItem;

    cart.forEach((cartItem)=>{
    if(cartItem.productId === productId ){
        matchingItem = cartItem;
    }
    });

    if(matchingItem){
      matchingItem.quantity++;
    }
    else{
      cart.push({
        productId: productId,
        quantity : 1
      });
    }

    saveToLocalStorage();
    
}

export function removeFromCart(productId){
  //console.log(productId);
  let newcart = [];
  cart.forEach((cartItem)=>{
      
      if(cartItem.productId !== productId){
        newcart.push(cartItem);
      }
  });
  cart = newcart;
  saveToLocalStorage();
}