import getProducts from "../api/api.js"
import gesamtPreis from "./gesamtPreis.js"
import shoppingCart from "./shoppingCart.js"


const addToCart = () => {
    let table = document.querySelector("#products-container table")
    let fragment = ""
    
    document.querySelectorAll(".btn").forEach(element =>{
        element.addEventListener('click', event =>{
           
            let btnId = event.target.id
            const print = getProducts().then(x=>{
                x.forEach(item => {
                    if(item.id == btnId){
                        var newItemContainer = document.createElement('div');
                        newItemContainer.classList = 'box card item-1 mb-3';
                        newItemContainer.id = item.id.toString();
                        newItemContainer.innerHTML = `
                            <img class="card-img-top" src="imgs/${item.imgSrc}" alt="">
                            <p class="gray card-title">"${item.name}"</p>
                            <button class="button-delate btn btn-dark">delete</button>                        
                        `
                        newItemContainer.querySelector('.button-delate').onclick = deleteItemFromCart;
                        table.appendChild(newItemContainer);

                        shoppingCart(item.name);
                        gesamtPreis(item.price);
                    }
                   
                })
                
            })
            
        })
        
    })

}

function deleteItemFromCart(event) {
    const itemContainer = event.target.parentElement;
    let itemId = itemContainer.id;


    let table = document.querySelector("#products-container table");
    const list = document.querySelector("#shopping-cart .list-1");
    
    const indexOfItem = Array.from(table.children).indexOf(itemContainer);
    list.children[indexOfItem].remove();

    itemContainer.remove();


    getProducts().then(items => {
        const itemToDelete = items.find(item => item.id.toString() == itemId);
        gesamtPreis(-itemToDelete.price);
    });
}

export default addToCart