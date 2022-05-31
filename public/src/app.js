import getProducts from "../api/api.js";
import addToCart from "../helpers/addToCart.js";

window.onload = function () {
    const prouductList = document.querySelectorAll(".grid-products")[0];

    getProducts().then(items => {
        items.forEach(item => {
            var newItemContainer = document.createElement('div');
            newItemContainer.classList = 'box card';
            newItemContainer.id = item.id.toString();
            newItemContainer.innerHTML = `
                <img class="card-img-top" src="imgs/${item.imgSrc}" alt="">
                <p class="gray card-title">"${item.name}"</p>
                <button id="${item.id}" class="button-box btn btn-info" >add</button>                    
            `
            prouductList.appendChild(newItemContainer);                
        });
        addToCart();
        
    })
}
