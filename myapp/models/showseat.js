'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class showSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  showSeat.init({
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    seatId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    showId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'showSeat',
  });
  return showSeat;
};