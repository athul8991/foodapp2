 import {foodData} from './data.js';

 const pizzaRoot = document.querySelector('#pizzaContainer');
 const cartRoot =document.querySelector('#cartContainer');
 const itemsBtn =document.querySelector('#items');
 itemsBtn.addEventListener('click',showCart);
 let cartItem =[]
 function displayData(){
    foodData.forEach((item,key)=>{
        let newPizza = `<div class="card item-img bg-primary" style="width: 18rem; ">
        <span class="badge "><i class="fa-solid fa-star"></i> ${item.rating}</span>
        <span class="badge like-btn" id =${item.id}><i class="fa-regular fa-heart"></i></span>
          <!-- <svg class="bd-placeholder-img card-img-top foodimg" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg> -->
          <img class="foodimg" src="${item.imgSrc}" alt="">
          <div class="card-body">
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <h4>${item.name}</h3>
              <h5>Price : $ ${item.price}</h5>
          </div>
        </div>`;

        pizzaRoot.innerHTML += newPizza;
    });
    const likebtn = document.getElementsByClassName('like-btn');

    // console.log(likebtn);

    if(likebtn){
      for(let element of likebtn){
        element.addEventListener('click',cartFunction)
      }
}
    
}

function cartFunction(e){
    const el =e.target;
    console.log(el.id);
    if(cartItem.length>0){
      console.log(el.id);
      let check = cartItem.filter(item=>item==el.id);
      console.log(check);

      if(check.length>0){
        removeItem(el);
      }else{
        addItem(el)
      }
    
  }else{
   addItem(el);
   console.log("first add");
  }
  
}

function addItem(el){
  console.log("add");
  el.classList.add("cart");
  cartItem.push(el.id);
  console.log(cartItem);
}

function removeItem (el){
  console.log("remove");
  el.classList.remove("cart");
  let filterCart = cartItem.filter(item=>el.id != item);
  console.log(filterCart);
  cartItem = filterCart;
}


function showCart(e){
  pizzaRoot.style.display ='none';
  cartRoot.style.display='inline-block'
  


}


 displayData();