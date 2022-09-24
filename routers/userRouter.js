const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');



router.post('/add',(req, res)=>{
    const Formdata=req.body;
    console.log(Formdata);

     new Model(Formdata).save()
     .then((result) => {
        console.log(result);
        res.json(result);
     }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
     });
});



router.post('/authenticate',(req, res)=>{
    const Formdata=req.body;
    console.log(Formdata);
    Model.findOne({email: Formdata.email})
    .then((result) => {
        res.json(result);
           
        if(res.status===401){
            res.json({status:'Login Failed'})
        }

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

router.get('/getall', (req, res)=>{
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
module.exports =router;