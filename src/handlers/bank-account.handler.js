import { catchAsync } from "../utils";

const validateBankAccount = catchAsync(async (req, res, next) => {
  return res.send("VALIDATE BANK ACCOUNT");
});

export default validateBankAccount;
