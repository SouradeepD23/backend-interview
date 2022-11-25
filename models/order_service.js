export default (sequelize, DataTypes) => {
    const OrderService = sequelize.define('order_service', {
        orderId :  {
            type: DataTypes.INTEGER
        },
        serviceId : {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    });

    return OrderService;
}
