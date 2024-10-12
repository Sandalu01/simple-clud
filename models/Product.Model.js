const mongoose =require("mongoose");
const ProductSchema= mongoose.Schema(
    {
        name:{
            required:[true,"please enter product name"]
        },
        quantity:{
            type :Number,
            required:true,
            default:0
        },
        price:{
            type :Number,
            required:true,
            default:0
        },

    },
    {
        Timestamp:true,
    }
);

const product =mongoose.model("product",ProductSchema);
module.exports=product;