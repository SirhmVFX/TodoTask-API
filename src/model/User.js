const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    title: {
        required: true, 
        type: String, 
        minlength: 3, 
        maxlength: 20
    },
    description: {
        required: true, 
        type: String, 
        minlength: 3, 
        maxlength: 100
    }
}, 
{timestamps: true}
);

const userModel = model("users", userSchema);

module.exports = userModel;