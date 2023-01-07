import { Router } from "express";
import handlers from "../handlers";

const router = Router();

router.post("/", handlers.validateBankAccount);

export default router;
