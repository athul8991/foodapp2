 import {foodData} from './data.js';

 const pizzaData = foodData.filter(data=>data.category =='Pizza');
 const biriyaniData =foodData.filter(data=>data.category =='biriyani');
 const mandiData = foodData.filter(data=>data.category =='mandi');
 const snackData =foodData.filter(data=>data.category =='snacks');
 const curryData =foodData.filter(data=>data.category =='curry');
 const vegData = foodData.filter(data=>data.category=='veg');
 const drinkData = foodData.filter(data=>data.category=='drinks');

 const pizzaRoot = document.querySelector('#pizzaContainer');
 const mandiRoot =document.querySelector('#mandiContainer');
 const biriyaniRoot =document.querySelector('#biriyaniContainer');
 const vegRoot =document.querySelector('#vegContainer');
 const curryRoot =document.querySelector('#curryContainer');
 const snackRoot =document.querySelector('#snacksContainer');
 const drinkRoot =document.querySelector('#drinksContainer');

 const cartRoot =document.querySelector('#cartContainer');
 cartRoot.style.display='none';
 const listRoot =document.querySelector('#listContainer');

 const foodRoot = document.querySelector('#foodContainer');

 const goForHunt = document.querySelector('#goForHunt');
 const itemsBtn =document.querySelector('#items');
 itemsBtn.addEventListener('click',showCart);
 const foodSelection = document.querySelectorAll('.foodMenu');
 console.log(foodSelection);
 if(foodSelection){
  for(let item of foodSelection){
    item.addEventListener('click',selectBg)
  }
 }

 function selectBg(e){
  console.log(e.target);
  for(let item of foodSelection){
    item.style.color ='black'
  }
  const el = e.target;
  el.style.color = 'red'

 }

 

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
  }
  
}

function addItem(el){
  console.log("add");
  el.classList.add("cart");
  cartItem.push(el.id);
  itemsBtn.innerHTML=`<i class="fa-solid fa-cart-plus item"></i> Items ${cartItem.length}`
  console.log(cartItem);
}

function removeItem (el){
  console.log("remove");
  el.classList.remove("cart");
  let filterCart = cartItem.filter(item=>el.id != item);
  console.log(filterCart);
  cartItem = filterCart;
  itemsBtn.innerHTML=`<i class="fa-solid fa-cart-plus item"></i> Items ${cartItem.length}`
  console.log(cartItem);
}


function showCart(e){
  console.log(cartRoot.style.display);
  
  if(cartRoot.style.display ==='none' || e==true){
    cartRoot.style.display ='block'; 
    goForHunt.style.display ='none';
    foodRoot.style.display ='none';
    itemsBtn.innerHTML=`Home`;
    listRoot.innerHTML='';
    const totalPrice = document.querySelector('#totalPrice');
    let count =0;
    cartItem.forEach((id) =>{
      let items;
      const [cart] = foodData.filter(item=>item.id==id);
      console.log(cart);
      count+=cart.price;
      items =` <div class="cartitem"> 
      <img src="${cart.imgSrc}" alt="">
      <div class="itemname">
      <h4>${cart.name}</h4>
      <p>Price : ₹ ${cart.price} </p>
    </div>
    <button class="delBtn" data-id="${cart.id}">
    <i class="fa-solid fa-trash" id="delete" ></i>
  </button>
  </div>`;
  listRoot.innerHTML += items;
    });const delBtn = document.getElementsByClassName('delBtn');
    if(delBtn){
      for(let itembtn of delBtn){
        itembtn.addEventListener('click',deleteItem);
      }
    }

    totalPrice.innerHTML =`Total Price : ₹ <span> ${count}</span>`;
  }else{
    foodRoot.style.display ='block';
    goForHunt.style.display='block';
    cartRoot.style.display ='none';
    itemsBtn.innerHTML =`<i class="fa-solid fa-cart-plus item"></i> Items ${cartItem.length}`
  }
}

function deleteItem(e){
  const id =e.target.getAttribute("data-id");
  const el =document.getElementById(id);
  el.classList.remove("cart");
  let filterCart = cartItem.filter(item=>id != item);
  console.log(filterCart);
  cartItem = filterCart;
  console.log(cartItem);
  showCart(true)

}



