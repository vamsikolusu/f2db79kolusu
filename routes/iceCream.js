var express = require('express');
const iceCream_controlers= require('../controllers/iceCream'); 
var router = express.Router();

/* GET home page. */

router.get('/', iceCream_controlers.iceCream_view_all_Page ); 
module.exports = router;
