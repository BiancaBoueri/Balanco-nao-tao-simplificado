import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { BalanceController } from "./controller/BalanceController";

const router = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const balanceController = new BalanceController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
//router.post("/balance", ensureAuthenticated, balanceController.handle);

export { router }

