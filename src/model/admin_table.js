const {Schema, model} = require("mongoose");


const Admin = new Schema(
    {
        username:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        }
    }
)

module.exports = model("admin", Admin);