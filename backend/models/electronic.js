const { Sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize,DataTypes)=>{
const electronic = sequelize.define(
  'electronic',
  {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,

    },
    price: {
      type: DataTypes.INTEGER,

    },
      image: {
      type: DataTypes.STRING,
      },
    categorie: {
  type: DataTypes.ENUM('PC','SMARTPHONE')
}

 
  })
    return electronic
}
