import db from "../models/index";

let getAllCodeUser = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameter",
        });
      } else {
        let res = await db.allCode_User.findAll({
          where: { type: typeInput },
        });
        resolve(res);
      }
      // let res = await db.allCode_User.findAll();
      // resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

let getColorProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let color = await db.Color.findAll();
      resolve({
        errCode: 0,
        errMessage: "Get color success",
        color,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getSizeProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let size = await db.Size.findAll();
      resolve({
        errCode: 0,
        errMessage: "Get size success",
        size,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getTypeProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let type = await db.Type_Customer.findAll();
      resolve({
        errCode: 0,
        errMessage: "Get type success",
        type,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let getCateProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let cate = await db.Category.findAll();
      resolve({
        errCode: 0,
        errMessage: "Get type success",
        cate,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let getTagProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let tag = await db.Tag.findAll();
      resolve({
        errCode: 0,
        errMessage: "Get type success",
        tag,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllCodeUser,
  getColorProduct,
  getSizeProduct,
  getTypeProduct,
  getCateProduct,
  getTagProduct,
};
