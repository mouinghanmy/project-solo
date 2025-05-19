const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize('E-commerce', 'root', 'root1234', {
  host: 'localhost',
  dialect:  'mysql' 
});

sequelize.authenticate()
.then(()=>{console.log('Connection has been established successfully')})
.catch((err)=>{console.log('Unable to connect to the database:',err)})
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize
db.phones=require('../models/phones')(sequelize,DataTypes)
db.laptop=require('../models/laptop')(sequelize,DataTypes)
db.User=require('../models/user')



// sequelize.sync({ force: true });
// console.log('DB synced successfully.');




module.exports=db