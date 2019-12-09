// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to GCPHub crafted with love!',
    });
});
// Import customer controller
var customerController = require('./customerController');
// Customer routes
router.route('/customersname')
    .get(customerController.index);
   // .post(customerController.new);
router.route('/customers/:customer_id')
    .get(customerController.view)
    .patch(customerController.update)
    .put(customerController.update)
    .delete(customerController.delete);
    router.route('/customers')
    .get(customerController.index1)
    .post(customerController.new);
    
// Export API routes

module.exports = router;