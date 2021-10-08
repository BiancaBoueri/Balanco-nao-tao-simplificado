import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const router = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();


router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);


export { router }