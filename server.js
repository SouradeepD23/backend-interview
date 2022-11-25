import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import ordersRoutes from "./routes/orders.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());

app.use('/orders', ordersRoutes);

app.get('*', (request, response) => {
    response.send("HELLO");
});

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
