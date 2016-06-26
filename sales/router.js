var express = require('express');     

router = express.Router();

//simple GET /  
router.get('/', function (req, res) {
    res.json({ message: 'hello world!' });
});


module.exports = router