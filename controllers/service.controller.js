const Service = require('../models/service.model');
const bcrypt = require('bcrypt')
const router = require('path');

const createService = (req, res) => {
    // console.log("INSIDEEEEEEE");
    try {
        Service.create({
            user_name: req.body.user_name,
            veh_no: req.body.veh_no,
            pick_dt: req.body.pick_dt,
            drop_dt: req.body.drop_dt,
            location: req.body.location,
            service_price: req.body.service_price,
            pay_amount: req.body.pay_amount
        }).then(Service => {
            if (Service) {
                res.redirect('../service/getService');
            }
        }).catch(err => {
            throw err;
        })
    } catch (err) {
        throw err;
    }
}

const getService = async (req, res) => {
    try {
        const serviceData = await Service.findAll({
            raw: true,
        })
        
            res.render('Info', { data: serviceData })
        
    } catch (err) {
        throw err;
    }
}

const getServiceById = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        Service.findOne({ where: { serviceid: id } }).then(service => {
            if (service) {
                res.render('EditService', { getData: service })
                // res.send(user)
            }
        }).catch(err => {
            throw err;
        })
    } catch (err) {
        throw err;
    }
}

const updateService =  (req, res) => {
    console.log("update qurey");
    try {
        console.log("update qurey 2");  
         Service.update({
            user_name: req.body.user_name,
            veh_no: req.body.veh_no,
            pick_dt: req.body.pick_dt,
            drop_dt: req.body.drop_dt,
            location: req.body.location,
            service_price: req.body.service_price,
            pay_amount: req.body.pay_amount
        },
            {
                where: {
                    serviceid: req.body.serviceid
                }

            }).then(service => {
                if (service) {
                    res.redirect('/service/getservice')
                }
            }).catch(err => {
                throw err;
            })

    } catch (err) {
        throw err;
    }
}

const deleteService = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        Service.destroy({ where: { serviceid: id } }).then(service => {
            if (service) {
                res.redirect('/service/getService');
            }
        })
    } catch (err) {
        throw err;
    }
}






module.exports = {
    createService,
    getService,
    getServiceById,
    updateService,
    deleteService
}