export default (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        createdOn: {
            type : DataTypes.DATE,
            defaultValue : DataTypes.NOW,
            allowNull : false
        },
        totalFee: {
            type : DataTypes.FLOAT
        }
        
    },
    {
        timestamps: false
    });

    return Order;
}
