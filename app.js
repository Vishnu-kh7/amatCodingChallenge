var express = require('express');
var app = express();
const path = require('path'); 
const router = express.Router(); 

// Setup essential routes 
router.get('/', function(req, res) { 
res.sendFile(path.join(__dirname + '/seatalloc.html')); //express will load this file on localhost:3000
 //__dirname : It will resolve to your project folder. 
}); 

app.use('/', router); 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  //This would load the css file from the public folder hosted in localhost:3000
  app.use(express.static('public'))

});
