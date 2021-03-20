import Order from "../models/order.model";

exports.createOrder = (req, res) => {
    
    const order = new Order({
        amountTotal: req.body.amountTotal,
        products: req.body.products,
        user: req.body.user
    })

    order.save()
        .then((data) => { res.send(data) })
        .catch(err => console.log(err));
}

exports.getOrders = (req, res) => {
    Order.find()
        .populate('products')
        .populate('user')
        .then((data) => res.send(data))
        .catch(err => console.log(err))
}