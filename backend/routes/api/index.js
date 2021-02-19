const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// ///////// ROUTE TESTING ///////
// // test the setTokenCookie function by getting the demo user and calling setTokenCookie.
// // GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // test the restoreUser middleware by connecting the middleware and checking whether or not the req.user key
// // has been populated by the middleware properly
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // test  requireAuth middleware
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });

// ///////// ROUTE TESTING ///////
module.exports = router;
