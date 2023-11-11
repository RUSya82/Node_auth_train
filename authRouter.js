import {Router} from "express";
import {AuthController} from "./authController.js";

const router = new Router();
const authController = new AuthController();

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/users', authController.getUser)

export default router