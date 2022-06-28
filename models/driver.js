const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const driverSchema = new Schema({
    driverName: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true 
})

module.exports = mongoose.model('Driver', driverSchema)