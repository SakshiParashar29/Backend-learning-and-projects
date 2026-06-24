const express = require('express');
require('dotenv').config();
const taskRoutes = require('./routes/task-route');
const app = express();

app.use(express.json());
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is listening');
})