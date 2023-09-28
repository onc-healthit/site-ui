const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const axios = require("axios")
const FormData = require("form-data")
const fs = require("fs")
const os = require("os")

var upload = multer({ dest: os.tmpdir()});
var type = upload.single('ccdaFile');
const path = require('path')
require('log-timestamp')(function() { return 'Date : "' + new Date().toISOString() + '" message : "%s"' });

router.post('/', type, (req, res) => {
 console.log(" request body parameters formdata ......."+JSON.stringify(req.body));
const url = req.body.ccdaurl;
const keyCloakURL = req.body.keycloakurl;
const clinetId = req.body.clientid;
const tmpFolder = req.body.tmpFolder
console.log("ccda url ........"+url);
console.log("keyCloakURL ........"+keyCloakURL);
console.log("client id ........"+clinetId);


  const formData = new FormData();
        formData.append("validationObjective", req.body.validationObjective);
        formData.append("referenceFileName", req.body.referenceFileName);
        let stream   = fs.createReadStream(path.join(req.file.path))
        formData.append("ccdaFile", stream);
        
        fs.unlink(path.join(req.file.path),function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        });  

    getToken();

    async function getToken() {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const params = new URLSearchParams();
              params.append('client_id', clinetId);
              params.append('client_secret', jwtSecretKey);
              params.append('grant_type', 'client_credentials');

            try{
                let respdata = await axios.post(keyCloakURL, params);
                // console.log("gettoken JSON.stringify( respdata access_token)  ::::::"+JSON.stringify(respdata.data.access_token) );
                getData(respdata.data.access_token);
            } catch (err) {
              console.log('Error getToken : ', JSON.stringify(err.message));
            if (err.response) {
                console.log('Error getToken response :');
            } else if (err.request) { 
              console.log('Error getToken request :');
            } else {
                // Anything else
                console.log('Error getToken :');
            }
            res.send("error while calling keycloak ");
        }
    }


    async function getData(access_token) {
      const options = {
        headers: {
            'Authorization': 'Bearer '+access_token,
            }
        };
            try{
                let respdata = await axios.post(url, formData,options);
                res.send(respdata.data);
            } catch (err) {
              console.log('Error getData : ', JSON.stringify(err.message));
            if (err.response) {
                console.log('Error getData response');
            } else if (err.request) { 
              console.log('Error getData request');
            } else {
                // Anything else
                console.log('Error getData: ', err.message);
            }
            res.send("error while calling ccda");        
        }
    }
});

module.exports = router;