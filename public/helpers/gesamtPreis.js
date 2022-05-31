
const gesamtPreis = (itemPrice)=>{

    
    const span = document.querySelector("span")
    currentPrice = currentPrice + itemPrice;

    span.innerHTML = currentPrice.toFixed(2);

    
}

export default gesamtPreis

let currentPrice = 0;
