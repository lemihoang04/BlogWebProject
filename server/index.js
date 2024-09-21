import express from 'express';
import dotenv from 'dotenv'

import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();
app.use('/', Router);

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
app.listen(PORT,() => console.log(USERNAME));  



Connection(USERNAME,PASSWORD);