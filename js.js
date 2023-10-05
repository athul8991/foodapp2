 import {foodData} from './data.js';
 const pizzaRoot = document.querySelector('#pizzaContainer');

 function displayData(){

    foodData.forEach((item)=>{
        const newPizza = `<div class="card item-img bg-primary" style="width: 18rem; ">
        <span class="badge "><i class="fa-solid fa-star"></i> ${item.rating}</span>
        <span class="badge like-btn"><i class="fa-regular fa-heart"></i></span>
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
   

 }

 displayData();