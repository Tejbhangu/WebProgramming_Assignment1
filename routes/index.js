var express = require('express');
var router = express.Router();
const aboutController = require('../controllers/aboutController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', aboutController.getAbout)
           
           
           
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects Page'})
})

router.get('/service', (req, res) => {
    res.render('service', { title: 'Service Page'})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me'})
})


module.exports = router;
