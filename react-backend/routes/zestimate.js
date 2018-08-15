var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let {API_KEY, address, cityStateZip} = req.query;
    address = encodeURI(address);
    cityStateZip = encodeURI(cityStateZip);
    const url = `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${API_KEY}&address=${address}&citystatezip=${cityStateZip}`;
    console.log(url);
    fetch(url)
        .then(result => result.text())
        .then(result => {
            res.send(result.split('<amount currency="USD">')[1].split('</amount>')[0]);
        })
        .catch(error => res.send('Sorry, could not calculate zestimate for this address :)'));
});

module.exports = router;