const express = require("express");
const { getListedProducts, 
    buyCart, 
    randomCart
    } = require("../controllers/cartController.js");

const {cartDto} = require('../validators/cartValidator.js')
const {validateRequest} = require('../middlewares/validateRequest.js')

const router = express.Router();

router.post("/", getListedProducts);
router.post('/buy', validateRequest(cartDto), buyCart)
router.get("/random", randomCart);

// router.get("/:id", getProductById);
// router.post("/", createProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports = router
