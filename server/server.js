const express = require('express') ;
const colors = require('colors') ;
const cors = require('cors') ;
const dotenv = require('dotenv').config() ;
const { errorHandler } = require('./middleware/errorMiddleware') ;
const connectDB = require('./config/mongoose.config') ;

const { userRoutes } = require('./routes/user.route.js') ;

const port =  process.env.PORT || 5000;
connectDB() ;

const app = express() ;

app.use(cors()) ;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false })) ;
app.use('/api/user', require(userRoutes)) ;
app.use(errorHandler) ;


app.listen(port, () => console.log(`Server started on port ${port}`)) ;