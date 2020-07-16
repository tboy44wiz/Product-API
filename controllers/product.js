const ProductModel = require('../models/product');
const joiValidator = require('../utils/joi_validator');

//  Add a New Product
module.exports.addProduct = async (req, res) => {
    //  Destructuring the Product data from the req.body.
    const { name, price, description, imageURL } = req.body;

    const newProduct = {
        name,
        price,
        description,
        imageURL,
    };

    //Validate the "reqBody" object using productValidator.
    const { error, value } = await joiValidator.productValidator.validate(newProduct);
    if (error) {
        return res.status(400).json({
            code: 400,
            status: false,
            Error: error,
        });
    }

    //  Check if a Product already exist.
    ProductModel.findOrCreate({
        where: {name},
        defaults: value,
    })
        .then(([result, status]) => {
            if (status === true) {
                return res.status(201).json({
                    code: 201,
                    status: true,
                    message: "Successfully added...",
                    data: {
                        product: {
                            id: result.id,
                            name: result.name,
                            price: result.price,
                            description: result.description,
                            imageURL: result.imageURL,
                        }
                    },
                });
            }

            return res.status(400).json({
                code: 400,
                status: false,
                message: "Product already exist.",
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