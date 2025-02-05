
const API_PRODUCTOS = 'https://dummyjson.com/products'

const getListedProducts = async (page)=>{

    //paginacion cada 10
    try {
        const skip = (page - 1) * 10
        const url = API_PRODUCTOS + '?limit=10' + (skip == 0 ? '' : `&skip=${skip}`);

        const resp = await fetch(url)
        const products = await resp.json()

        return products.products
    } catch (error) {
        console.log('error en request a la api de productos', error)
        return false
    }
    
}

const getAllProducts = async ()=>{
    
    try {
        const totalres = await fetch(API_PRODUCTOS)
        let total = await totalres.json()

        if(total){
            total = total.total
        }
        else{
            total = 0
        }

        let allProducts = []
        for(let i = 0 ; i <= (Math.ceil(total / 10)); i++){
            const prod = await getListedProducts(i)
            allProducts.push(...prod)  
        }        
    
        return allProducts

    } catch (error) {
        console.log(error)
        return false
    }
    
}

const checkStock =(stockcart, cart)=>{

    for (let i = 0; i < stockcart.length; i++){
        
        let st = stockcart[i].stock
        let r = stockcart[i].rating
        let sr = st/r

        stockcart[i].sr = sr

        if(stockcart[i].quantity <= sr){
            stockcart[i].abailable = true
        }
        else{
            stockcart[i].abailable = false
        }
    }

    return stockcart
}


const checkCart = async (cart)=>{
    try {

        const allProducts = await getAllProducts()
        let stockcart = []

        for(let prod = 0; cart.length >prod ;prod++){

            const index = allProducts.findIndex(item => item.id == cart[prod].productId);

            if (index != -1) { 

                allProducts[index].quantity = cart[prod].quantity
                allProducts[index].discount = cart[prod].discount

                stockcart.push(allProducts[index]); 

            } else {
                console.log('No incluye', cart[prod]);
            }

        }



        const checkedCart = checkStock(stockcart, cart)

        const filteredProducts = checkedCart.map(({ id, title, price, discount, quantity, stock:st, rating:r, sr }) => ({
            id,
            title,
            price,
            discount,
            quantity,
            st,
            r,
            sr
          }));

        const checkOut = checkedCart.some(item=> item.abailable == false)
        console.log('Carrito solicitado', filteredProducts)

        return !checkOut

    } catch (error) {
        console.log(error)
    }
    
}

const randomCart = async ()=>{
    const allProducts = await getAllProducts()

    const randomCart = [];
    const numProducts = Math.floor(Math.random() * 5) + 1; // 1 a 5 productos

    for (let i = 0; i < numProducts; i++) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        const product = allProducts[randomIndex];
  
        randomCart.push(product);
    }
    return randomCart

}


module.exports = { getListedProducts, checkCart,randomCart };
