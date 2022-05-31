const getProducts = async () => {      
    try {
        const data = await fetch("../products.json")
        const products = await data.json();
        return products;
    } catch (error) {
        console.error("Products could not be fetched! %o", error);
    }
}

export default getProducts;

