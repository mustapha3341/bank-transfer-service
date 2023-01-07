import { Router } from "express";
import handlers from "../handlers";

const router = Router();

router.get("/", handlers.getBankList);

export default router;
