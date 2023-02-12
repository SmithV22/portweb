// const express = require('express') ;
// const colors = require('colors') ;
// const cors = require('cors') ;
// const dotenv = require('dotenv').config() ;

// const { routerUser } = require('./routes/user.route.js') ;
// const { errorHandler } = require('./middleware/errorMiddleware') ;
// const { connectDB } = require('./config/mongoose.config') ;


// const port =  process.env.PORT || 5000;
// connectDB() ;

// const app = express() ;

// app.use(cors()) ;
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: false })) ;
// app.use('/api/user', require(routerUser)) ;
// app.use(errorHandler) ;


// app.listen(port, () => console.log(`Server started on port ${port}`)) ;

import express from 'express' ;
import colors from 'colors' ;
import cors from 'cors' ;
import dotenv from'dotenv';

import routerUser from './routes/user.route.js' ;
import errorHandler from './middleware/errorMiddleware' ;
import connectDB  from './config/mongoose.config' ;


const port =  process.env.PORT || 5000;
connectDB() ;

const app = express() ;

app.use(cors()) ;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true })) ;
app.use('/api/user', require(routerUser)) ;
app.use(errorHandler) ;


app.listen(port, () => console.log(`Server started on port ${port}`)) ;
