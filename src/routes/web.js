import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import productController from "../controllers/productController";
let router = express.Router();

let initWebRoutes = (app) => {
  //Data user
  router.post("/api/create-new-user", userController.handleCreateNewUser);

  //Database allCode
  router.get("/api/get-all-code-user", homeController.handleGetAllCodeUser);
  router.get("/api/get-code-size-product", homeController.handleGetSizeProduct);
  router.get("/api/get-code-type-product", homeController.handleGetTypeProduct);
  router.get("/api/get-code-cate-product", homeController.handleGetCateProduct);
  router.get("/api/get-code-tag-product", homeController.handleGetTagProduct);

  //Database product
  router.post(
    "/api/create-new-product",
    productController.handleCreateNewProduct
  );
  router.post("/api/create-new-color", productController.handleCreateNewColor);
  // router.post("/api/create-color-product", productController.handleCreateColorProduct);
  router.get("/api/fetch-product", productController.handleFetchProduct);
  router.get("/api/get-color-product", homeController.handleGetColorProduct);

  return app.use("/", router);
};

module.exports = initWebRoutes;
