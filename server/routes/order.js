import express from "express";
import {placeOrder , getMyOrders, getOrderDetails, getAdminOrders, processOrder, placeOrderOnline, paymentVerification} from "../controllers/Order.js";
import {isAuthenticated ,authorizeAdmin} from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder", isAuthenticated ,placeOrder);

router.post("/createorderonline", isAuthenticated ,placeOrderOnline);

router.post("/paymentverification", isAuthenticated , paymentVerification);

router.get("/myorders", isAuthenticated , getMyOrders);

router.get("/order/:id",isAuthenticated , getOrderDetails);

//Add Admin Middleware 

router.get("/admin/orders",isAuthenticated, authorizeAdmin,getAdminOrders);

router.get("/admin/order/:id",isAuthenticated,authorizeAdmin,processOrder);

export default router;