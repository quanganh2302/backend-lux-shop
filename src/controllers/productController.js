import productServices from "../services/productServices";

let handleCreateNewProduct = async (req, res) => {
  try {
    let message = await productServices.createNewProduct(req.body);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

// let handleCreateColorProduct = async (req, res) => {
//   try {
//     let message = await productServices.createColorProduct(req.body);
//     return res.status(200).json(message);
//   } catch (e) {
//     console.log(e);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "Error from server",
//     });
//   }
// };

let handleFetchProduct = async (req, res) => {
  try {
    let message = await productServices.fetchProduct();
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let handleCreateNewColor = async (req, res) => {
  try {
    let message = await productServices.createNewColor(req.body);
    return res.status(200).json(message);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  handleCreateNewProduct,
  // handleCreateColorProduct,
  handleFetchProduct,
  handleCreateNewColor,
};
