import { Router } from "express";
import handlers from "../handlers";

const router = Router();

router.get("/", handlers.getAllTransactions);
router.get("/:reference", handlers.getTransactionByReference);

export default router;
