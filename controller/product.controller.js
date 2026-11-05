const { read_file } = require("../fs/api")
const { v4 } = require("uuid");

const  getAllProducts= (req, res)=>{
    const products=read_file("product.json");
    res.status(200).json(products);
};



const addProduct=(req, res)=>{
     const { title, desc , price}= req.body
 const products = read_file("product.json")

 products.push({
   id:v4(),
   title,
   desc,
   price,
 })
   write_file("product.json", products)
   res.status(201).json({
    message:"Aded new project"
   })

}

module.exports={
    getAllProducts,
   addProduct
}