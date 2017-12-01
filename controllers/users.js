const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res)=>{
  if(req.session.logged){
      User.find({}, (err, foundUsers)=>{
        res.render('users/index.ejs', {
          users: foundUsers
        });
      })
  } else {
    res.redirect('/sessions/login')
  }

});

router.post('/', (req, res)=>{
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/users');
    });
});


module.exports = router;
