import models from '../models/index.js';

const Order = models.Order;
const Service = models.Service;
const OrderService = models.OrderService;

const getAllOrders = async(request, response) => {
    try {
        const orders = await Order.findAll({
            include : [{
                model : Service,
                attributes : { include : ['id', 'name']}
            }]
        });

        if(orders.length < 1) {
            return response.status(204).send("NO DATA AVAILABLE");
        } else {
            return response.status(200).json({ orders });
        }
    } catch (error) {
        return response.status(500).send(error.message);

    }
}

const getOrderById = async(request, response) => {
    try {
        const { id } = request.params;
        const order = await Order.findOne({
            where : { id : id },
            include : [{
                model : Service,
                attributes : { include : ['id', 'name']}
            }]
        });

        if(order) {
            return response.status(200).json({ order });
        } else {
            return response.status(200).send("ORDER DOES NOT EXIST");
        }
    } catch (error) {
        return response.status(500).send(error.message);

    }
}

const createOrder = async(request, response) => {
    const orderData = {
        createdOn : request.body.createdOn,
        totalFee : request.body.totalFee
    };

    const orderServiceData = {
        serviceId : request.body.serviceId
    };

    try {
        const order = await Order.create(orderData);
        orderServiceData.orderId = order.id;

        await OrderService.create(orderServiceData);

        return response.status(201).json({ order });
    } catch(error) {
        return response.status(500).json({ error: error.message });
    }
}

const updateOrder = async(request, response) => {
    try {
        const { id } = request.params;
        const data = {
            createdOn : request.body.createdOn,
            totalFee : request.body.totalFee
        }
        const order = await Order.update({
            createdOn : data.createdOn,
            totalFee : data.totalFee
        },
        {where : { id : id }});
        return response.status(200).json({ order });
    } catch(error) {
        return response.status(500).json({ error: error.message });
    }
}

const deleteOrder = async(request, response) => {
    try {
        const { id } = request.params;
        const order = await Order.destroy({where : { id : id }});
        return response.status(200).json({ order });
    } catch(error) {
        return response.status(500).json({ error: error.message });
    }
}



export default {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}