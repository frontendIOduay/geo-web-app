
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const History = sequelize.define('History', {
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  locationData: {
    type: DataTypes.JSON,
    allowNull: false
  }
});

module.exports = History;