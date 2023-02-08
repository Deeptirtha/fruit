const express=  require("express")
const mongoose= require("mongoose")
const route= require("./src/route/route")

const app= express()

app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect("",{
    useNewUrlParser:true
})

.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(3000,function(){
    console.log("running on " + 3000)
})