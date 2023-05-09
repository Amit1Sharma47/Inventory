const express=require('express')
const sequelize=require('./utils/database')
const userRoutes=require('./routes/Inventory')
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: '../public/' })
const app = express()
app.use(express.json())
// app.use(forms.array()); 
app.use(bodyParser.urlencoded());
app.use(bodyParser.json({ extended: true }));
// app.use(upload.single('avatar'))
app.use(userRoutes)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
sequelize.sync().then((res) => {
    app.listen(4000,()=>{
        console.log('listening on')
    })
}).catch((err) => console.log(err))
