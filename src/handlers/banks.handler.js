import { catchAsync } from "../utils";

const getBankList = catchAsync(async (req, res, next) => {
  return res.send("BANK LIST");
});

export default getBankList;
