export default (sequelize, DataTypes) => {
    const Service = sequelize.define('service', {
        id: {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name: {
            type : DataTypes.STRING
        }
    },
    {
        timestamps: false
    });

    return Service;
}

