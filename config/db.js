const { default: mongoose } = require('mongoose');



const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log (`MongoDB Connedted: ${conn.connection.host}`)
    } catch (error){
        console.error(error)
        process.exit(1)

    }
}
module.exports = connectDB