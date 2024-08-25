const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,"please enter product name"],
        trim: true,
        maxLength: [100,"product name cannot be exceed 100 characters"]
    },
    price: {
        type: Number,
        required: true,//default kuduththa ithu podanuma?
        default: 0.0
    },
    description: {
        type: String,
        required:[true, "please enter product description"]
    },
    ratings:{
        type: String,
        default: 0
    },
    images: [
        {
            image:{
                type: String,
                required:true
            }
        }
    ],
    category: {
        type: String,
        required:[true,"please enter product category"],
        enum:{// namma ennenna category use pandrom apdingrathukkana list summa thevallama ellathayu edukkelathu
            values: [
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'

            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "please enter product stock"],
        maxLength: [20,'product stock cannot exceed 20']
    },
    numOfReviews: {
        type:Number,
        default: 0
    },
    reviews:[
        {
            name:{
                type: String,
                required: true
            },
            rating:{
                type: String,
                required: true
            },
            comment: {
                type:String,
                required: true

            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let schema = mongoose.model('Product',productSchema)

modules.exports = schema