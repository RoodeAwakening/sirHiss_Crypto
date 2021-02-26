//This file will hold the resources for the route paths beginning with /api/users.

const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();


//validation for the signup
const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage("First Name must be 3 characters or more."),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ min: 3 })
    .withMessage("Last Name must be 3 characters or more."),
  check("funds")
    .exists({ checkFalsy: false })
    .isLength({ min: 0 })
    .withMessage("Get funds?."),
  handleValidationErrors,
];

// SIGN UP
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
   console.log('----look here--->',req.body);
    const { email, password, username, firstName, lastName, funds } = req.body;
    const user = await User.signup({ email, username, password, firstName, lastName, funds });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;
