//inicializo el package.json con el comando 'npm init -y'
//Agrego el 'Type: "module"' en el package.json
//Instalo Express con el compando 'npm i express'



import express from "express"
import ProductManager from "./productManager.js"


const PORT=3000

const app=express()

app.get('/', (req,res)=>{
    
    res.send("HomePage")
})

app.get('/products', (req,res)=>{
    const {limit} = req.query;

    const p = new ProductManager();
    
    res.json({Productos:p.getProductsLimited(limit)})
})

app.get('/products/:productId', (req,res)=>{
    const {productId} = req.params;

    const p = new ProductManager();
    const product = p.getProductById(productId);

    res.json({Producto: product});
})


app.listen(PORT, ()=>console.log(`Server Online en puerto ${PORT}`))
//inicio el servidor con el comando 'nodemon app.js'


