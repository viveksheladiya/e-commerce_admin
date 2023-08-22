const Product = require('../Model/Product');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51NUio7SFp5okCFuJpQCXZnoT6rZ4MIB19BMr222tlBOrF60AhyVgvcABzISlgNbhVSN0vfUEB0rv8TYKKXW43z0I00sjnw9vX6');

exports.getProduct = async (req, res) => {
    let result = await Product.find({});
    return res.json(result);
}

exports.addproduct = async (req, res) => {
    const { title, brand, category, price } = req.body;
    const image = req.file ? req.file.filename : '';
    let result = new Product({
        title,
        brand,
        category,
        price,
        image,
    });
    try {
        const response = await result.save();
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add product', err: err.message });
    }
}

exports.editproduct = async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result);
}

exports.getupdateproduct = async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result);
    } else {
        res.send({})
    }
}

exports.deleteproduct = async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
}

exports.searchproduct = async (req, res) => {
    let result = await Product.find({
        "$or": [
            { title: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } },
        ]
    });
    res.send(result);
}

exports.stripepayment = async (req, res) => {
    const line_items = req.body.cartItem.map((item) => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.brand,
                    description: item.title,
                },
                unit_amount: item.price * item.cartQuantity * 100,
            },
            quantity: 1,
        }
    })
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["IN"],
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 0,
                        currency: "inr",
                    },
                    display_name: "Free shipping",
                    // Delivers between 5-7 business days
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 5,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 7,
                        },
                    },
                },
            },
            {
                shipping_rate_data: {
                    type: "fixed_amount",
                    fixed_amount: {
                        amount: 1500,
                        currency: "inr",
                    },
                    display_name: "Next day air",
                    // Delivers in exactly 1 business day
                    delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 1,
                        },
                    },
                },
            },
        ],
        phone_number_collection: {
            enabled: true,
        },
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cart',
    });

    res.send({ url: session.url })
}