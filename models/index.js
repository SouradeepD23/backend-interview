import sequelize from '../utils/dbconnect.js';
import { DataTypes, Sequelize } from 'sequelize';
import Order from './order.js'
import Service from './service.js';
import OrderService from './order_service.js'

const models = {};
models.Sequelize = Sequelize;
models.sequelize = sequelize;
models.Order = Order(sequelize, DataTypes);
models.Service = Service(sequelize, DataTypes);
models.OrderService = OrderService(sequelize, DataTypes);

models.sequelize.sync({ alter : true }).then(() => {
    console.log("database sync")
});


/* Creating Many-to-Many relationship between Order and Service */
models.Order.belongsToMany(models.Service, {
    through : models.OrderService,
    foreignKey : 'orderId'
});

models.Service.belongsToMany(models.Order, {
    through : models.OrderService,
    foreignKey : 'serviceId'
});

export default models;
