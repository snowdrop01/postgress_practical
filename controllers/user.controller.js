const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const router = require('path')

const createUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            res.redirect('/')
        } else {
            await User.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                phoneNumber: req.body.phoneNumber,
                dateOfBirth: req.body.dateOfBirth,
                country: req.body.country,
                address: req.body.address
            }).then(Users => {

                if (Users) {
                    res.redirect('/user/getUser');
                }
            }).catch(err => {
                throw err;
            })
        }

    } catch (err) {
        throw err;
    }
}

const getuser = async (req, res) => {
    try {

        const userData = await User.findAll({
            raw: true,
        })
        if (userData) {
            res.render('Home', { data: userData}) 
        }
    } catch (err) {
        throw err;
    }
}

const getUserById = (req, res) => {
    try {
        const id = parseInt(req.params.id)
        User.findOne({ where: { userid: id } }).then(user => {
            if (user) {
                res.render('EditUser', { getData: user })
                // res.send(user)
            }
        }).catch(err => {
            throw err;
        })
    } catch (err) {
        throw err;
    }
}

const updateUser = async (req, res) => {
    console.log("update qurey");
    try {
        console.log("update qurey 2");

        await User.update({
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth: req.body.dateOfBirth,
            country: req.body.country,
            address: req.body.address
        },
            {
                where: {
                    userid: req.body.userid
                }

            }).then(user => {
                if (user) {
                    res.redirect('/user/getUser')

                }
            }).catch(err => {
                throw err;
            })

    } catch (err) {
        throw err;
    }
}

const deleteUser = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        User.destroy({ where: { userid: id } }).then(user => {
            if (user) {
                res.redirect('/user/getUser');
            }
        })
    } catch (err) {
        throw err;
    }
}



const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            const password_validate = await bcrypt.compare(req.body.password, user.password);
            if (password_validate) {
                res.status(200).json({ msg: "user Login Successfully!!!", user })
            } else {
                res.status(400).json({ error: "Password is Incorrect" })
            }
        } else {
            res.status(400).json({ error: "User Not Found" })
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    getuser,
    getUserById,
    updateUser,
    deleteUser,
    login
}