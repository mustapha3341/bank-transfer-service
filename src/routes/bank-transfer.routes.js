import { Router } from "express";
import handlers from "../handlers";

const router = Router();

router.post("/", handlers.bankTransfer);

export default router;
