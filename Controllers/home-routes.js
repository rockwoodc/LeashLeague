const router = require('express').Router();
const sequelize = require('../config/loginconnection');
const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    // if (req.session.LOGIN) {
    //     res.redirect('dashboard')
    // } else {
        res.render('login')
    // }
});

router.get('/login', (req, res) => {
    console.log('===============')
    res.redirect('/')
});

router.get('/dashboard', (req, res) => {
        res.render('dashboard')
});

router.get('/register', (req, res) => {
    console.log('===============')
    res.render('register')
});

module.exports = router;