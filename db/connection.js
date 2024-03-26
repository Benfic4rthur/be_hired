const Sequelize = require('sequelize'); // import sequelize
const sequelize = new Sequelize('be_hired', 'root', 'root', { // connect to db
    dialect: 'sqlite',
    Storage: './db/app.db'
});

module.exports = sequelize // export connection