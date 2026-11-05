const { Router} = require("express")
const { getAllProducts, addProduct } = require("../controller/product.controller")
const productRouter = Router()

productRouter.get("/get_all_products", getAllProducts)
productRouter.post("/add_product", addProduct)


module.exports=productRouter