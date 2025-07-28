const mongoose =require('mongoose');

//schema:
const addresSchema =new mongoose.Schema({
      
        city:String,
        street:String

})

const userSchema =new mongoose.Schema({
    name:String,
    age:{
         type:Number,
        min:10,
        max:40,
        validate:{
            validator: v => v % 2 == 0,
            message: props=>`${props.value} is not number`
        }

    },
    email:{
        type: String,
        required: true,
        lowercase:true

    },
    createdAt:{
        type:Date,
        // default: new Date
        default:()=>Date.now()
    },
    updatedAt:Date,
    bestFriend:mongoose.Schema.Types.ObjectId,
    hobbies:[String],
    addres:addresSchema

})

//Model:

const userModel =mongoose.model('user',userSchema)

//export:

module.exports =userModel