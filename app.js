const mongoose = require('mongoose');
const config =require('./config/.env')
mongoose.connect(CLOUD_CON)
.then(()=>{
    console.log('Database Connected')
})
.catch(()=>{
    console.log('Database connection error')
})