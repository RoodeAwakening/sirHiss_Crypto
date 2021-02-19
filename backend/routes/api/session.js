//This file will hold the resources for the route paths beginning with /api/session.
const express = require("express");
const asyncHandler = require("express-async-handler");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

//check the credential and password key and validate them
//It checks to see if req.body.credential and req.body.password is not empty.
const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Pleae provide a valid email or username"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password"),
  handleValidationErrors,
];

//LOGIN
router.post(
  "/",
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login Failed");
      err.status = 401;
      err.title = "Login Failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

//LOGOUT
router.delete("/", (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

//RESTORE SESSION USER
router.get("/", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else return res.json({});
});

module.exports = router;
