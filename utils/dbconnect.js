import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const dbconfig = {
    user: process.env.DATASOURCE_USERNAME,
    database: process.env.DATASOURCE_DATABASE,
    password: process.env.DATASOURCE_PASSWORD,
    host: process.env.DATASOURCE_HOST,
    port: process.env.DATASOURCE_PORT
  };
  
const sequelize = new Sequelize(`postgres://${dbconfig.user}:${dbconfig.password}@${dbconfig.host}:${dbconfig.port}/${dbconfig.database}`);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default sequelize;
