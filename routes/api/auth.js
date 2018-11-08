
var jwt = require('jsonwebtoken');
const router = require('express').Router();

router.get('/auth', verifytoken, function (req, res) {
   jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      
      res.json({
        status: '404',
      });
    } else {
      res.json({
        status: '200',
      });
    };
  });
});


// Verify Token
function verifytoken(req, res, next) {
  //Get auth header value
   const bearerHeader = req.headers['authorization'];
  //Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    //next middleware
    next();

  } else {
    //Forbidden
    res.sendStatus(403);

  }
};

module.exports = router;