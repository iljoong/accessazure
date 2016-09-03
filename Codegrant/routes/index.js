var express = require('express');
var router = express.Router();

var request = require('request');

// get AAD config
var _config = require('./__config.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { token: req.cookies.token});

});

router.get('/login', function(req, res, next) {

  var config = {
      uri: 'https://login.windows.net/' + _config.tenant_id + '/oauth2/authorize',
      method: 'GET',
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
      form: {
        response_type: 'code',
        client_id: _config.client_id,
        redirect_uri: _config.redirect_uri,
        //response_mode: 'query',
        resource: 'https://management.core.windows.net/'
      }
    }; 
  
  request(config, function (err, response, body) {
      
      if (err) {
          console.log(err);
      } else {
          console.log("body:", body);
          
          res.send(body);                    

      } 
  }); 
  
});

router.get('/auth/callback', function(req, res, next) {

  var config = {
      uri: 'https://login.windows.net/' + _config.tenant_id + '/oauth2/token',
      method: 'POST',
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
      json: true,
      form: {
        grant_type: 'authorization_code',
        client_id: _config.client_id,
        redirect_uri: _config.redirect_uri,
        code: req.query.code,
        resource: 'https://management.core.windows.net/',
        client_secret: _config.client_secret
      }
    }; 
  
  request(config, function (err, response, body) {
      
      if (err) {
          console.log(err);
      } else {  

          res.cookie('token', body.access_token, {  maxAge: 3600000 });
          res.cookie('refresh_token', body.refresh_token, {  maxAge: 36000000 });

          res.redirect('/');                   

      } 
  });

});

router.get('/azure', function(req, res, next) {

    var token = req.cookies.token;
    var retoken = req.cookies.refresh_token;

    getVMlist(token, function(err, resp, body) {
        if (err) {
            console.log(err); 
            res.render('error', {error: err});    
        }
        else {
            res.render('vmlist', {title: "VM List", token: token, retoken: retoken, body: body})
        }
    });
});

function getVMlist(token, func)
{
    if (!token)
    {
        console.log('NO access_token');
        return;
    }
    
    var config = {
        uri: 'https://management.azure.com/subscriptions/'+ _config.subscription + '/providers/Microsoft.Compute/virtualmachines?api-version=2016-03-30',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json;charset=utf-8'
        }
    };  

    request(config, func); 
}

module.exports = router;

