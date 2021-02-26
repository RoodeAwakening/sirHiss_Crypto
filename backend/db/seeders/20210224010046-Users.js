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
        {firstName:'demo', lastName:'user', email:'demo@user.io', username: 'Demo-lition', funds:10846.00, hashedPassword: bcrypt.hashSync('password')},
        {firstName:'Frank', lastName:'Jackson', email:faker.internet.email(), username:'hindsdust', funds:1000.00, hashedPassword: bcrypt.hashSync('password')},
        {firstName:'Derek', lastName:'Roode',email:faker.internet.email(), username:'roughlyrecall', funds:25000.00, hashedPassword: bcrypt.hashSync('password')},
    
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