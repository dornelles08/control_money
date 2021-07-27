import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateAccountController } from "./controllers/CreateAccountController";
import { ListAccountController } from "./controllers/ListAccountsController";
import { GetAccountController } from "./controllers/GetAccountsController";
import { ListCategoryController } from "./controllers/ListCategoryController";
import { CreateCardController } from "./controllers/CreateCardController";
import { ListCardController } from "./controllers/ListCardController";
import { UpdateCardController } from "./controllers/UpdateCardController";
import { CreateRegisterController } from "./controllers/CreateRegisterController";
import { ListRegisterController } from "./controllers/ListRegisterController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();

const createAccountController = new CreateAccountController();
const getAccountsController = new GetAccountController();
const listAccountsController = new ListAccountController();

const createCardController = new CreateCardController();
const listCardController = new ListCardController();
const updateCardController = new UpdateCardController();

const createRegisterController = new CreateRegisterController();
const listRegisterController = new ListRegisterController();

const router = Router();

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);

router.post("/categories", ensureAuthenticated, createCategoryController.handle);
router.get("/categories", ensureAuthenticated, listCategoryController.handle);
router.get("/categories/:id", ensureAuthenticated, listCategoryController.handle);

router.post("/account", ensureAuthenticated, createAccountController.handle);
router.get("/account", ensureAuthenticated, listAccountsController.handle);
router.get("/account/:id", ensureAuthenticated, getAccountsController.handle);

router.post("/cards", ensureAuthenticated, createCardController.handle);
router.get("/cards", ensureAuthenticated, listCardController.handle);
router.put("/cards/:id", ensureAuthenticated, updateCardController.handle);

router.post("/registers", ensureAuthenticated, createRegisterController.handle);
router.get("/registers", ensureAuthenticated, listRegisterController.handle);


export { router };