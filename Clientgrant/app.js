var request = require('request');

// get AAD config
var _config = require('./_config.js');

getToken( function(body) {
    var json = JSON.parse(body); 
    var access_token = json.access_token;

    console.log('\n#OAuth Demo - Client Grant\n');
    console.log('\n##Token\n');  
    console.log(access_token);

    getVMList(access_token);
});

function getToken(func) {
  
  var config = {
      uri: 'https://login.microsoftonline.com/' + _config.tenant_id + '/oauth2/token',
      method: 'POST',
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
      form: {
          grant_type: 'client_credentials',
          resource: 'https://management.core.windows.net/',
          client_id: _config.client_id,
          client_secret: _config.client_secret

      }
    };  
  
  request(config, function(err, resp, body) {
    if (err) {
      console.log(err);     
    }  else {
        func( body );
    }
  }); 
}

function getVMList(token) {
    if (!token) {
        console.log('NO access_token');
        return;
    }

    var config = {
        uri: 'https://management.azure.com/subscriptions/' + _config.subscription + '/providers/Microsoft.Compute/virtualMachines?api-version=2016-03-30',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json;charset=utf-8'
        }
    };

    request(config, function (err, resp, body) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('\n##VM List\n');
            console.log(body);
            console.log('\n\niljoong@outlook.com')
        }

    });
}
