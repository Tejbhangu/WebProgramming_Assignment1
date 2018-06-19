var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const projectsController = require('../controllers/projectsController');
const serviceController = require('../controllers/serviceController');
const contactController = require('../controllers/contactController');

/* GET home page. */
router.get('/', indexController.Home);

router.get('/about', aboutController.getAbout);
           
router.get('/projects', projectsController.getProjects);

router.get('/service', serviceController.getService);

router.get('/contact', contactController.getContact);


module.exports = router;
