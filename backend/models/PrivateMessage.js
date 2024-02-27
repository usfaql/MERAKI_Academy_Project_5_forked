const mongoose = require("mongoose");

const PrivateMessagesModel = new mongoose.Schema({
    coach_id : {type : Number},
    user_id : {type : Number},
    messages: [{
    from : {type : Number},
    room : {type : String},
    name : {type : String},
    image : {type : String},
    message : { type: String },
    created_at : { type: Date, default: Date.now }
    }]
})

module.exports = mongoose.model("MessagesPrivate", PrivateMessagesModel)