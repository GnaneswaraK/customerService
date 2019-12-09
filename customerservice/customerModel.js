// customerModel.js
var mongoose = require('mongoose');
// Setup schema
var customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Customer model
var Customer = module.exports = mongoose.model('customer', customerSchema);
module.exports.get = function (callback, limit) {
    Customer.find(callback).limit(limit);
}

module.exports.getCustomers = function (callback, limit) {
    var cust = { 
               _id: true,
                name: true,
               
            };
    Customer.find({},cust,callback).limit(limit);
}


 


