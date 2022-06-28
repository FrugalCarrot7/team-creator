const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true 
})

module.exports = mongoose.model('Team', teamSchema)