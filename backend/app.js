const express=require('express')
const sequelize=require('./utils/database')
const userRoutes=require('./routes/Inventory')
const app = express()
app.use(express.json())
app.use(userRoutes)
sequelize.sync().then((res) => {
    app.listen(4000,()=>{
        console.log('listening on')
    })
}).catch((err) => console.log(err))
