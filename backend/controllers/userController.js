import asyncHandler from "express-async-handler";
// @desc Auth User/set token
// route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Auth User Route" });
});

export { authUser };
