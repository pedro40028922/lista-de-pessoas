const express = require("express")
        const app = express()
        
app.use(express.json())


const cadrastosRouters = require('./Routers/Routers')
    app.use(cadrastosRouters)

app.listen(3000, () => {
        console.log("app htpp://localhost:3000")
    })