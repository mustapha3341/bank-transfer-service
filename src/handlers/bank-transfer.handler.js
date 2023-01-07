import { catchAsync } from "../utils";

const bankTransfer = catchAsync(async (req, res, next) => {
  return res.send("BANK TRANSFER");
});

export default bankTransfer;
