const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");
const dashbordRouter = require("./dashboard");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/dashboard", dashbordRouter)

module.exports = router;
