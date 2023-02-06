import express from 'express' ;
import colors from 'colors' ;
import cors from 'cors' ;
import * as dotenv from 'dotenv' ;
import connectDB from '../server/config/mongoose.config.js' ;
import errorHandler from './middleware/errorMiddleware.js' ;
const userRoutes = './routes/user.route.js' ;

const app = express() ;
const port =  process.env.PORT || 5000;

dotenv.config() ;

app.use(cors()) ;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false })) ;
app.use('/api/user', require(userRoutes)) ;
app.use(errorHandler) ;

connectDB() ;

app.listen(port, () => console.log(`Server started on port ${port}`)) ;