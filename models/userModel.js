const mongoose =require('mongoose');

//schema:

const userSchema =new mongoose.schema({
    name:String,
    age:Number,

})

//Model:

const userModel =mongoose.model('user',userSchema)

//export:

module.exports =userModel