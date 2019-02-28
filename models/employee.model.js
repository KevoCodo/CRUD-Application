const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: 'This field is required.'
    },
    email:{
        type: String,
        required: 'This field is required.'
    },
    mobile:{
        type: String
    },
    city:{
        type: String
    },
});

//Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(val); // Assuming email has a text attribute
 }, 'The e-mail field cannot be empty.')

mongoose.model('Employee', employeeSchema);