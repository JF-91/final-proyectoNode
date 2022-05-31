
const shoppingCart = (item)=>{

    const list = document.querySelector("#shopping-cart .list-1")
    const li = document.createElement("li")
    li.classList.add("list-into")
    li.innerHTML = item
    list.appendChild(li)


}

export default shoppingCart