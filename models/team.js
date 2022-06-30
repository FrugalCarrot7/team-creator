const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    teamCar: {
        type: String,
        enum: ['Merc W13', 'Red Bull RB18', 'Ferrari F1-75', 'McLaren MCL36', 'Alpine A522', 
        'AlphaTauri AT03', 'Aston Martin AMR22', 'Williams FW44', 'Alfa Romeo C42', 'Haas VF-22']
    },
    members: [{type: Schema.Types.ObjectId, ref: 'Driver'}],
    //user info 
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true 
})

module.exports = mongoose.model('Team', teamSchema)