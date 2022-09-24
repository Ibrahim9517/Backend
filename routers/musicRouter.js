const express = require('express');
const router = express.Router();
const Model = require('../models/musicModel');



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



router.post('/getall',(req, res)=>{
    Model.findOne({})
    .then((result) => {
            res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
module.exports =router;