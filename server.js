import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as R from './routes/index.js';
import { connectDB } from './config/config.js';
import { errorHandler } from './middlewares/errorHandler.js'; 


// install these  
// npm i axios path bcryptjs cookie-parser cors dotenv express jsonwebtoken mongoose nodemon


const app = express();
dotenv.config();
// connectDB(); 


app.use(bodyParser.json({ limit: '1gb' }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true}));
app.use( "/api", express.static('public') ,R.Product ); 
// image url  http://localhost:3000/api/uploads/(your Image).png
  
app.use(errorHandler);

 
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is listening at', `\x1b[33m${process.env.URI}\x1b[0m`));
