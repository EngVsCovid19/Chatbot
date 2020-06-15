const express = require('express');
const rp = require('request-promise');

const router = express.Router();

router.get('/:country', (req,res,next) =>{
    const country = req.params.country || '';
    if(country == '') uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco";
    else uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/"+country;

    const options = {
        uri: uri,
        json: true
    }
    
    rp(options).then(resp => {
        res.status(200).send(resp);
        //console.log(result);
    });    
});

router.get('/', (req,res,next) =>{
    const country = req.query.country || '';
    if(country == '') uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco";
    else uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/"+country;

    const options = {
        uri: uri,
        json: true
    }
    
    rp(options).then(resp => {
        res.status(200).send(resp);
        //console.log(result);
    });
});
router.post('/:country', (req,res,next) =>{
    const country = req.params.country || '';
    if(country == '') uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco";
    else uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/"+country;

    const options = {
        uri: uri,
        json: true
    }
    
    rp(options).then(resp => {
        res.status(200).send(resp);
        //console.log(result);
    });    
});

router.post('/', (req,res,next) =>{
    const country = req.query.country || '';
    if(country == '') uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/morocco";
    else uri = "https://moroccostats.herokuapp.com/stats/coronavirus/countries/"+country;

    const options = {
        uri: uri,
        json: true
    }
    
    rp(options).then(resp => {
        res.status(200).send(resp);
        //console.log(result);
    });    
});

module.exports = router;