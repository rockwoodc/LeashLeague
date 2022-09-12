const router = require('express').Router();

const apiRouting = require('./api');
const homeRouting = require('./home-routes.js')
const dashboardRouting = require('./dashboard-routes.js');


router.use('/', homeRouting);
router.use('/dashboard', dashboardRouting);
router.use('/api', apiRouting);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;