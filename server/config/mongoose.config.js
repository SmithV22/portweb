
const mongoose = require('mongoose') ;
const db = process.env.MONGO_URI ;

const connectDB = (db) => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(db) ;
        console.log(`MongoDB Connected: ${db}`.cyan.underline) ;
    } catch (error) {
        console.log(error) ;
        process.exit(1)
    }
} ;



module.exports = {
    connectDB,
    default: connectDB,
} 