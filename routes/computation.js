var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();
var z = x+y;
/* GET home page. */
router.get('/', function(req, res, next) {
    var r1 = Math.imul(x,y);
    var r2 = Math.log(x,y);
    var r3 = Math.log10(z);
    res.send(`imul applied to [${x},${y}] is [${r1}] <br>Log applied to [${x},${y}] is [${r2}] <br>log10 applied to [${z}] is [${r3}] <br>  `)
  res.render('mydata', { title: 'Daka,Sai Sahithi' });
});

module.exports = router;
