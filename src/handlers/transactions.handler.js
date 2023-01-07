import { catchAsync } from "../utils";

const getAllTransactions = catchAsync(async (req, res, next) => {
  return res.send("TRANSACTIONs");
});

export const getTransactionByReference = catchAsync(async (req, res, next) => {
  return res.send("SINGLE TRANSACTION");
});

export default getAllTransactions;
