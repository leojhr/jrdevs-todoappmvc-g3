const { Router } = require('express');
const controllerLogin = require('../controllers/authLogin/authLogin');

const router = Router();

router.get('/login', controllerLogin.authLogin);

router.get('/', controllerLogin.home);

module.exports = router;