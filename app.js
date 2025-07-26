const mongoose = require('mongoose');

require('dotenv').config({ path: './config/.env' });


mongoose.connect(process.env.CLOUD_CON)
.then(()=>{
    console.log('Database Connected')
})
.catch(()=>{
    console.log('Database connection error')
})