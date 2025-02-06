const cartServices = require('../services/cartServices')
const { cartDto } = require("../validators/cartValidator");



const getListedProducts= async (req, res)=>{
    try {
        const page = req.body.page || 1
        const products = await cartServices.getListedProducts(page)
        res.status(200).json({succes: true, status:200, body: products})

      } catch (error) {
        res.status(500).json({ success: false , status: 500, error: error.message });
      }
}

const buyCart = async (req, res) =>{
    
    try {
        const validCart = req.body

        const checkcart = await cartServices.checkCart(validCart)

        if(checkcart){
            res.status(200).json({success: true, status:200, message:'carrito recibido', body: checkcart})
        }
        else{
            res.status(200).json({success: true, status:200, message:'Su carrito no puede ser recibido', body: checkcart})
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, status:500, 'error':error})
    }


}

const randomCart= async (req, res)=>{
    try {
        const cart = await cartServices.randomCart()
        res.status(200).json({success: true, status:200, message:'carrito Aleatorio', body: cart})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, status:500, 'error':error})
    }
}

module.exports = { getListedProducts, buyCart, randomCart };
