'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {first_name:'demo', last_name:'user', email:'demo@user.io', username: 'Demo-lition', funds:0.0, hashedPassword: bcrypt.hashSync('password')},
        {first_name:'Frank', last_name:'Jackson', email:faker.internet.email(), username:'hindsdust', funds:100.00, hashedPassword: bcrypt.hashSync('password')},
        {first_name:'Derek', last_name:'Roode',email:faker.internet.email(), username:'roughlyrecall', funds:200.00, hashedPassword: bcrypt.hashSync('password')},
    
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};