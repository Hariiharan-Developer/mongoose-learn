const mongoose = require('mongoose');
const User = require('./models/userModel');

require('dotenv').config({ path: './config/.env' });


mongoose.connect(process.env.CLOUD_CON)
.then(()=>{
    console.log('Database Connected')
})
.catch(()=>{
    console.log('Database connection error')
})

// const user =new User({
//     name: 'Hariharan',
//     age:24
// })
// user.save().then(()=>{
//     console.log('User Saved')
// })

async function run(){
    try{
          const newuser = await User.create({
      name: "Virat Kholi",
      age: 39,
      hobbies:['Sports','Music'],
      addres:{
        street:'2nd Street'
      },
      email:'test@harii.com'
    }); 
    console.log(newuser)
    }
    catch(e){
        console.log(e.message)
    }
 


}
run()
