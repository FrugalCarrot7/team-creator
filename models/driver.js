const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const driverSchema = new Schema({
    driverName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    country: {
        type: String,
        default: "United States"
    }
}, 
{
    timestamps: true 
})

module.exports = mongoose.model('Driver', driverSchema)