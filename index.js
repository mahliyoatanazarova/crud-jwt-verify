const express = require("express");
require("dotenv").config()
const cors = require("cors");

const productRouter = require("./router/product.routes");
const authRouter = require("./router/auth.router");

const app = express();
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())


//router  bu kodni yozishmz bn api mizni butun expressga korsatib qoydik 
app.use( "/api", productRouter)
app.use(authRouter)


app.listen(PORT, () => {
    console.log("Server running on port at:" + PORT);
});