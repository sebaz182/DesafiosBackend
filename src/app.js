const express=require("express")

const PORT=3000

const app=express()

app.get("/", (req,res)=>{
    
    res.send("HomePage")
})

app.listen(PORT, ()=>console.log(`Server Online en puerto ${PORT}`))

