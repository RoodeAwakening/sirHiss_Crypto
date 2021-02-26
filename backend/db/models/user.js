"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
      funds: {
        allowNull: false,
        type: DataTypes.FLOAT,
        default: 0.0
      },
    },
    {
      // These scopes help protect sensitive user information that should not be exposed the current session's user or to other users.
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {

    //user has many transations 
    User.hasMany(models.Transaction,{foreignKey:'user_id'})
    //user has many portfolioholding
    User.hasMany(models.PortfolioHolding,{foreignKey:'user_id'})
    //user has one watchlist
    User.hasMany(models.Watchlist,{foreignKey:'user_id'})

    // User.hasMany(models.WatchlistAssets,{
    //   through: 'Watchlists',
    //   foreignKey: 'user_id',
    //   otherkey: "watchlist_id"
    // })



  };

  //will return an object with the User instance information that is safe to save to a JWT
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  //will accept a password string and return true if there is a match with the User instance's hashedPassword
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  //will accept an id and return a User with that id using the currentUser scope
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };


  // login function
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  // signup function
  User.signup = async function ({ username, email, password, firstName, lastName, funds }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      firstName,
      lastName,
      funds
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};