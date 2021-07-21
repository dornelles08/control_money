import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateAccountController } from "./controllers/CreateAccountController";

const createUserController = new CreateUserController();
const createCategoryController = new CreateCategoryController();
const createAccountController = new CreateAccountController();
const authenticateUserController = new AuthenticateUserController();
const router = Router();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/categories", ensureAuthenticated, createCategoryController.handle);
router.post("/account", ensureAuthenticated, createAccountController.handle);

export { router };