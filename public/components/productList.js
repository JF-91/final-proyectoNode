import getProducts from "../api/api.js";

const productList = () => {
    let table = document.querySelector("#products-container table")
    //const template = document.querySelector(".template-product").content
    let fragment = ''

    const promise = getProducts()
    
    

    promise.then(x =>{
        x.forEach(x =>{
            fragment += `
            <div class="box card item-1 mb-3" id="${x.id}" name="">
                 <img class="card-img-top" src="imgs/${x.imgSrc}" alt="">
                 <p class="gray card-title">"${x.name}"</p>
                 <button class="button-delate btn btn-dark" onclick="deleteToCart(event)">delete</button>
          </div>
            `
         //console.log(x);
         table.innerHTML = fragment
        })
        
    })

   /*

    */

   

   
   return fragment
     
         
       
    
}

export default productList