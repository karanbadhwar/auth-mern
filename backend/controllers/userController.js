// @desc Auth User/set token
// route POST /api/users/auth
//@access Public
const authUser = (req, res) => {
  res.status(200).json({ msg: "Auth User Route" });
};

export { authUser };
