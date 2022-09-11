const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.get('/login', (req, res) => {
  console.log('This is the LOGIN ROUTE');
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;