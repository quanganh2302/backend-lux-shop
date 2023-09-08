import db from "../models";

let checkMailExist = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await checkMailExist(data.email);
      if (!res) {
        await db.User.create({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          address: data.address,
          phoneNumber: data.phoneNumber,
          roleId: data.roleId,
          gender: data.gender,
        });
        resolve({
          errCode: 0,
          errMessage: "create user successfully",
        });
      } 
      else {
        resolve({
          errCode: 1,
          errMessage: "Email is existed",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser,
  checkMailExist,
};
