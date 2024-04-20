// index.ts
// import express = require('express'); //! import express from 'express';
// import * as express from 'express';
import express, { Application } from 'express';
// import { Application } from 'express';
// import * as bodyParser from 'body-parser';
import bodyParser from 'body-parser';
import userRoutes from './app/routes/userRoutes';
import swaggerUI from 'swagger-ui-express';
// import * as swaggerUI from 'swagger-ui-express';
import swaggerSpec from './app/swagger';

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
