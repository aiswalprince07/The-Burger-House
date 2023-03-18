import express from "express";
import {
  getAdminOrders,
  getMyorders,
  getOrderDetails,
  paymentVerification,
  placeOrder,
  placeOrderOnline,
  processOrder,
} from "../controllers/order.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder",isAuthenticated,placeOrder);
router.post("/createorderonline",isAuthenticated,placeOrderOnline);
router.post("/paymentverification",isAuthenticated,paymentVerification);

router.get("/myorders",isAuthenticated,getMyorders);
router.get("/order/:id",isAuthenticated,getOrderDetails);

// add admin middleware 
router.get("/admin/orders",isAuthenticated,authorizeAdmin,getAdminOrders);
router.get("/admin/order/:id",isAuthenticated,authorizeAdmin,processOrder);

export default router;