const router = require('express').Router();
const sequelize = require('../config/loginconnection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    if (req.session.LOGIN) {
        res.render('/dashboard')
    } else {
        res.render('login')
    }
});

router.get('/dashboard', withAuth, (req, res) => {
        res.render('/dashboard')
});

router.get('/login', (req, res) => {
    console.log('===============')
    res.render('login')
});

router.get('/register', (req, res) => {
    console.log('===============')
    res.render('register')
});

// router.get('/login', (req, res) => {
//     if(req.session.)
// })

module.exports = router;