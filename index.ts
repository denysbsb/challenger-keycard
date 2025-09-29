const express = require('express');
const api = express();
const service = ('./service');
const jsonWebToken = require('jsonWebToken');

api.post("/login"){ req,res =>
    var username = req.body.username
    var password = req.body.passwrod

    if(login(username, password)){
    var backDigital =   service.getDigitalKeycard()
    return res.status(200).json(jsonWebToken.sing(backDigital));}
    else {
    res.status(500).json({msg: auth login error})}
 }

api.get("/checkValid"){ req,res =>
    var keycard = req.body.keycar
    var authBearer = req.headers.authorization;
    // if token behearer
    if(service.validationBearer(authBearer)){
    var validKeyCard = service.validKeycard(keycard) 
        res.status(200).json(valid: validKeyCard));
    } else {
        res.status(500).json(msg:"invalid behearer");
    }
}
