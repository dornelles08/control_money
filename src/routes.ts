import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateAccountController } from "./controllers/CreateAccountController";
import { ListAccountController } from "./controllers/ListAccountsController";
import { GetAccountController } from "./controllers/GetAccountsController";
import { ListCategoryController } from "./controllers/ListCategoryController";

const createUserController = new CreateUserController();
const createCategoryController = new CreateCategoryController();
const createAccountController = new CreateAccountController();
const authenticateUserController = new AuthenticateUserController();
const listAccountsController = new ListAccountController();
const getAccountsController = new GetAccountController();
const listCategoryController = new ListCategoryController()

const router = Router();

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);

router.post("/categories", ensureAuthenticated, createCategoryController.handle);
router.get("/categories", ensureAuthenticated, listCategoryController.handle);
router.get("/categories/:id", ensureAuthenticated, listCategoryController.handle);

router.post("/account", ensureAuthenticated, createAccountController.handle);
router.get("/account", ensureAuthenticated, listAccountsController.handle);
router.get("/account/:id", ensureAuthenticated, getAccountsController.handle);

export { router };