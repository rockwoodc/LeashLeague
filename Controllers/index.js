const router = require('express').Router();

const homeRouting = require('./home-routes')
const apiRouting = require('./api');

router.use('/', homeRouting);
router.use('/api', apiRouting);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;