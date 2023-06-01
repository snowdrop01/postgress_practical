const Sequelize = require('sequelize');

const sequelize = require('../util/pgdb');

const Service = sequelize.define('service', {
  serviceid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  veh_no:{
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  pick_dt:{
    type: Sequelize.DATE,
    allowNull: false,
    require: true
  },
  drop_dt:{
    type: Sequelize.DATE,
    allowNull: false,
    require: true
  },
  location:{
    type: Sequelize.STRING,
    allowNull: false,
    require: true
  },
  service_price:{
    type: Sequelize.INTEGER,
    allowNull: false,
    require: true
  },
  pay_amount:{
    type: Sequelize.INTEGER,
    allowNull: false,
    require: true
  }

  
});

module.exports = Service;
