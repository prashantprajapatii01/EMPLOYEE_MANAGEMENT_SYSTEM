const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Employee name is mendatory"]
    },
    email:{
        type:String,
        required:[true,"Employee email is mendatory"]
    },
    phone:{
        type:Number,
        required:[true,"Employee phone is mendatory"]
    },
    designation:{
        type:String,
        required:[true,"Employee designation is mendatory"]
    },
    salary:{
        type:Number,
        required:[true,"Employee salary is mendatory"]
    },
    city:{
        type:String,

    },
    state:{
        type:String,
       
    }
})
const Employee = new  mongoose.model("Employee",EmployeeSchema)

module.exports = Employee