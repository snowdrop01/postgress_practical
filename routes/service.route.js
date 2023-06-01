const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/service.controller');

router.post('/addService',serviceController.createService),

router.get('/getService',serviceController.getService);

router.get('/getServiceById/:id',serviceController.getServiceById);

router.post('/updateService',serviceController.updateService),

router.get('/deleteService/:id',serviceController.deleteService);

module.exports = router;