const mongoose = require(mongoose);

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    unit_price: { type: String, required: true },
    category_id: { type: String },
    image: { type: String },
},{ 
    timestamps: true,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;