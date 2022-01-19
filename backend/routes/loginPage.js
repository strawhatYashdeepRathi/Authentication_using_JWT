const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const router = express.Router();
var jwt = require('jsonwebtoken');
const { json } = require("body-parser");
const { body, validationResult } = require('express-validator');
const secret = "GenerateToken"

router.post('/register',body('email'), body('password'), async(req, res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        }
        const {name, email, password} = req.body;
        bcrypt.hash(password, 10, async function(err, hash){
            console.log(name, email, password, hash);
            try{
                if (err){
                    console.log(err);
                    return res.status(400).json({
                        status: 'failed',
                        message: 'Invalid data'
                    })
                }else{
                    const user = await User.create({
                        name,
                        email,
                        password: hash
                    })
                    return res.status(200).json({
                        status: 'success',
                        data: user
                    })
                }
            }catch(e){
                res.status(400).json({
                    status: "failed",
                    message: e.message
                })
            }
        })
    }catch(e){
        res.status(400).json({
            status: 'failed',
            message: e.message
        })
    }

});
router.post('/login',body('email'), body('password'), async(req, res)=>{
    try{
        console.log(req.body);
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log(user);
        console.log(password);
        bcrypt.compare(password, user.password, async function(err, result){
            console.log(name, email, password, hash);
            if (err){
                console.log(err);
                return res.status(500).json({
                    status: 'failed',
                    message: 'Username/password incorrect'
                })
            }else{
                if(result){
                    const token = jwt.sign({
                        exp: Math.floor(Date.now()/100) + (60*60),
                        data: user._id
                    }, secret)
                    return res.status(200).json({status: "success", token: token});
                }else{
                    console.log(result);
                    return res.status(400).json({
                        status: 'failed',
                        message: 'Username/password incorrect'
                    })
                }
            }
        })
    }catch(e){
        res.status(400).json({
            status: 'failed',
            message: e.message
        })
    }

});
module.exports = router;