const { Sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize,DataTypes)=>{
const laptop = sequelize.define(
  'laptop',
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
      type: DataTypes.INTEGER+'DT',

    },
      image: {
      type: DataTypes.STRING,
      },
         categorie: {
      type: DataTypes.STRING,
      }
 
  })
    return laptop
}

  
