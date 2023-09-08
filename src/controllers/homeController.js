import homeServices from "../services/homeServices";

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let handleGetAllCodeUser = async (req, res) => {
  try {
    let data = await homeServices.getAllCodeUser(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Err from server",
    });
  }
};

let handleGetColorProduct = async (req, res) => {
  try {
    let color = await homeServices.getColorProduct();
    res.status(200).json(color);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: 1,
      errMessage: "Error from server",
    });
  }
};

let handleGetSizeProduct = async (req, res) => {
  try {
    let size = await homeServices.getSizeProduct();
    res.status(200).json(size);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: 1,
      errMessage: "Error from server",
    });
  }
};

let handleGetTypeProduct = async (req, res) => {
  try {
    let type = await homeServices.getTypeProduct();
    res.status(200).json(type);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: 1,
      errMessage: "Error from server",
    });
  }
};

let handleGetCateProduct = async (req, res) => {
  try {
    let cate = await homeServices.getCateProduct();
    res.status(200).json(cate);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: 1,
      errMessage: "Error from server",
    });
  }
};
let handleGetTagProduct = async (req, res) => {
  try {
    let tag = await homeServices.getTagProduct();
    res.status(200).json(tag);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: 1,
      errMessage: "Error from server",
    });
  }
};
module.exports = {
  getHomePage,
  handleGetAllCodeUser,
  handleGetColorProduct,
  handleGetSizeProduct,
  handleGetTypeProduct,
  handleGetCateProduct,
  handleGetTagProduct,
};
