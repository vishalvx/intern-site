import bcryptjs from "bcryptjs";
const { genSalt, hash } = bcryptjs;

export const registerUser = async (
  firstname,
  lastname,
  email,
  password,
  role
  ) => {
  const { user } = await import("../User/user.js");
  //gen salt
  const salt = await genSalt(10);

  //join salt with password and create hash
  const hashedPassword = await hash(password, salt);

  //login in db
  const result = await user.insertOne({
    firstname,
    lastname,
    role,
    email: {
      address: email,
      verified: false,
    },
    password: hashedPassword,
  });

  //return sucess Id
  return result.insertedId;
};
