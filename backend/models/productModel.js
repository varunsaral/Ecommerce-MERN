
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter the name"]
    },
    description:{
        type:String,
        required:[true,"Enter the description"]
    },
    price:{
        type:Number,
        required :[true,"Enter the price"],
        maxlength:[8,"price cannot exceed 8 char"]
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,"Please enter catogery"]
    },
    stock:{
        type:Number,
        required:[true,"Enter stock"],
        maxlength:4,
        default:1
    },
    numOfReview:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            require:true
        }
    }],
    createdAt :{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model("Product",productSchema); 