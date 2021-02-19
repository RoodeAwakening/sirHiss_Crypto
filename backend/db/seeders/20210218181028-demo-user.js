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
        {email:'demo@user.io', username: 'Demo-lition', hashedPassword: bcrypt.hashSync('password')},
        {email:faker.internet.email(), username:'hindsdust', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'roughlyrecall', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'batteryconstant', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'jubilantsignal', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'concreteshades', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'giddyCod', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'madLlama', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'chicMoth', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'alertMandrill', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'cruelUnicorn', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'holisticHawk', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'crushedCordial', hashedPassword: bcrypt.hashSync(faker.internet.password())},
        {email:faker.internet.email(), username:'wanderingPanda', hashedPassword: bcrypt.hashSync(faker.internet.password())}
     
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
