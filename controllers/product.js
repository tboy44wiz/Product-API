const ProductModel = require('../models/product');

//  Add a New Product
module.exports.addProduct = (req, res) => {
        const { name, unit_price, category_id, image } = req.body;

    const newProduct = new ProductModel({
        name,
        unit_price,
        category_id,
        image,
    });


    //  Check if a Product already exist.
    ProductModel.findOne({ name: newProduct.name })
    .then((existingProduct) => {
        if (existingProduct) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Product already exist.",
            });
        }

        //  Save Product.
        newProduct.save()
            .then((result) => {
                return res.status(201).json({
                    code: 201,
                    status: true,
                    message: "Successfully added...",
                    product: {
                        name: result.name,
                        unit_price: result.unit_price,
                        category_id: result.category_id,
                        image: result.image,
                    },
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    code: 500,
                    status: false,
                    message: error.message,
                });
            });
    })
    .catch((error) => {
        return res.status(500).json({
            code: 500,
            status: false,
            message: error.message,
        });
    });
};