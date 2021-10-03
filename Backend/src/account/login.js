import bcryptjs from "bcryptjs";
const { compare } = bcryptjs;

export const loginUser = async (email, password, role) => {
  const { user } = await import("../User/user.js");
  // find user in db

  const userData = await user.findOne({
    "email.address": email,
  });
  // get password of  user
  const userPassword = userData.password;
  const userRole = userData.role;
  //compare password of user
  const isAutorized = await compare(password, userPassword);

  console.log(userData);
  console.log(role)
  // return success
  console.log(`isAutorized`, isAutorized)
  if (isAutorized && userRole == role) {
    return {
      isLogin: true,
      userData,
    };
  } else {
    return {
      isLogin: false,
    };
  }
};
