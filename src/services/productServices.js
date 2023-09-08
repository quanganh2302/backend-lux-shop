import db from "../models";

// let checkProductId = (data) => {
//   return new Promise((resolve, reject) => {
//     try {
//       if (!data) {
//         resolve({
//           errCode: -1,
//           errMessage: "Missing required parameter",
//         });
//       } else if (data.productId) {
//         resolve(false);
//       } else {
//         resolve(true);
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
// Create check function next time --------------------------------------------------

let createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: -1,
          errMessage: "Missing required parameter",
        });
      } else {
        let res = await db.Product.create({
          productId: data.productId,
          nameProductEn: data.productNameEn,
          nameProductVi: data.productNameVi,
          desc: data.desc,
          image: data.image,
          tagName: data.tagName,
          catagoriesId: data.category,
          typeKeyMap: data.typeKeyMap,
          sizeKeyMap: data.sizeKeyMap,
          quantity: data.quantity,
          weigh: data.weigh,
        });
        let productId = await res.dataValues.id;
        console.log(productId);
        createColorProduct(data, productId);
        resolve({
          errCode: 0,
          errMessage: "create product successfully",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let createColorProduct = (data, productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataColor = data.colorPicked;
      let newData = dataColor.map((item, index) => ({
        productId: productId,
        keyMap: item,
      }));
      await db.Product_Color.bulkCreate(newData);
      resolve({
        errCode: 0,
        errMessage: "create color of product successfully",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let fetchProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await db.Product.findAll({
        include: [
          {
            model: db.Color,
            attributes: ["nameEn"],
            through: {
              attributes: ["productId", "keyMap"],
            },
          },
          {
            model: db.Category,
            attributes: ["nameEn"],
          },
          {
            model: db.Type_Customer,
            attributes: ["nameEn"],
          },
        ],
      });
      resolve({
        errCode: 0,
        data: res,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let createNewColor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.colorKey) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        // If have data before create, res === false
        let res = await db.Color.findOrCreate({
          where: { colorKey: data.colorKey },
          defaults: {
            colorKey: data.colorKey,
            value: data.value,
            nameEn: data.nameEn,
            nameVi: data.nameVi,
          },
        });
        if (!res[1]) {
          resolve({
            res,
            errCode: 2,
            errMessage: "Key color existed",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "Create color successful",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewProduct,
  createColorProduct,
  fetchProduct,
  createNewColor,
};
