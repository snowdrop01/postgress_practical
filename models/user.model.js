const Sequelize = require('sequelize');

const sequelize = require('../util/pgdb');

const Users = sequelize.define('user', {
  userid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  phoneNumber: {
    type: Sequelize.BIGINT,
    allowNull: false,
    require: true
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull: false,
    require: true
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
    require: true
  }
  
});

module.exports = Users;
