import { Router } from "express";
import transactionRouter from "./transaction.routes";
import bankTransferRouter from "./bank-transfer.routes";
import bankAccountRouter from "./bank-account.routes";
import banksRouter from "./bank.routes";

const router = Router();

router.use("/transaction", transactionRouter);
router.use("/bankTransfer", bankTransferRouter);
router.use("/validateBankAccount", bankAccountRouter);
router.use("/banks", banksRouter);

export default router;
