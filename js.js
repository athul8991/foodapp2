 import {foodData} from './data.js';

 const pizzaData = foodData.filter(data=>data.category =='Pizza');
 const biriyaniData =foodData.filter(data=>data.category =='biriyani');
 const mandiData = foodData.filter(data=>data.category =='mandi');
 const snackData =foodData.filter(data=>data.category =='snaks');
 const curryData =foodData.filter(data=>data.category =='curry');
 const vegData = foodData.filter(data=>data.category=='veg');
 const drinkData = foodData.filter(data=>data.category=='drinks');

 const pizzaRoot = document.querySelector('#pizzaContainer');
 const mandiRoot =document.querySelector('#mandiContainer');
 const biriyaniRoot =document.querySelector('#biriyaniContainer');
 const vegRoot =document.querySelector('#vegContainer');
 const curryRoot =document.querySelector('#curryContainer');
 const snackRoot =document.querySelector('#snaksContainer');
 const drinkRoot =document.querySelector('#drinksContainer');

 const cartRoot =document.querySelector('#cartContainer');
 const foodRoot = document.querySelector('#foodContainer');

 const itemsBtn =document.querySelector('#items');
 itemsBtn.addEventListener('click',showCart);

 let cartItem =[];

 displayData(pizzaData,pizzaRoot);
 displayData(biriyaniData,biriyaniRoot);
 displayData(mandiData,mandiRoot);
 displayData(snackData,snackRoot)
 displayData(vegData,vegRoot);
 displayData(curryData,curryRoot);
 displayData(drinkData,drinkRoot);


 function displayData(data,root){
    data.forEach((item,key)=>{
        let newData = `<div class="card item-img bg-primary" style="width: 18rem; ">
        <span class="badge "><i class="fa-solid fa-star"></i> ${item.rating}</span>
        <span class="badge like-btn" id =${item.id}><i class="fa-regular fa-heart"></i></span>
          <!-- <svg class="bd-placeholder-img card-img-top foodimg" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg> -->
          <img class="foodimg" src="${item.imgSrc}" alt="">
          <div class="card-body">
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <h4>${item.name}</h3>
              <h5>Price : ₹ ${item.price}</h5>
          </div>
        </div>`;

        root.innerHTML += newData;
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
  console.log(cartItem);
}


function showCart(e){
  if(foodRoot.style.display =='block'){
    cartRoot.style.display ='block'; 
    foodRoot.style.display ='none';
    cartRoot.innerHTML='';
    cartItem.forEach(id =>{
      let items;
      console.log(id);
      const cart = foodData[id];
      console.log(cart);
      items =`<h1>${cart.name}</h1>`;
      cartRoot.innerHTML += items;

    })
  }else{
    foodRoot.style.display ='block';
    cartRoot.style.display ='none';
  }
}



