
const mongoose = require('mongoose') ;
const db = process.env.MONGO_URI ;

const connectDB = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(db) ;
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline) ;
    } catch (error) {
        console.log(error) ;
        process.exit(1)
    }
} ;

export default connectDB ;