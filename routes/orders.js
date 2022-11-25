import express from 'express';
import bodyParser from 'body-parser';
import sampleData from '../sample-data.js';
import orderController from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);

orderRouter.get('/:id', orderController.getOrderById);

orderRouter.post('/', orderController.createOrder);

orderRouter.put('/:id', orderController.updateOrder);

orderRouter.delete('/:id', orderController.deleteOrder);


export default orderRouter;
