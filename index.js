const express = require("express")


const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server is running')
})

app.get("/user",(request,response)=>{
    response.json([1,3,7,42,99])

})
app.get("/list",(request,response)=>{
    response.json([{
        "name":"Alice",
        "age":"30",
        "occupation":"Engineer"
    },
    {
        "name":"Oluwatosin",
        "age":"21",
        "occupation":"Software Developer"
    }
])

})

app.get("/language",(request,response)=>{
    response.json(["Javascript","Python","C++","Ruby"])

})