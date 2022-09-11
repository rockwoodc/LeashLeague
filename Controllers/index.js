const router = require('express').Router();

const homeRouting = require('./home-routes')
const apiRouting = require('./api');
const mainpageRouting = require('./main-routes');

router.use('/', homeRouting);
router.use('/api', apiRouting);
router.use('/main', mainpageRouting);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;