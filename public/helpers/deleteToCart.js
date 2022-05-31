
import fetch_api from "../api/api.js"
import gesamtPreis from "./gesamtPreis.js"


const deleteToCart = ()=>{

    const fragment = document.createDocumentFragment()

    document.querySelector("#products-container")
        .addEventListener("click", btn =>{
            delate(btn)

        })

    const delate = (e) =>{
        //console.log(e.target);
        //console.log(e.target.classList.contains("btn-dark"));

        if(e.target.classList.contains("btn-dark")){
            console.log(e.target);
            console.log( e.target.parentElement);
            const parentElement = document.querySelector(".box-card")
            const table = document.querySelector("table div")
            table.remove(parentElement)
            //gesamtPreis(e);
        }
        
        
            
            

        e.stopPropagation()
    }

}

export default deleteToCart