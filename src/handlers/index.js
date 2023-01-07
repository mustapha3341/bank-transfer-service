import getBankList from "./banks.handler";
import validateBankAccount from "./bank-account.handler";
import bankTransfer from "./bank-transfer.handler";
import getAllTransactions, {
  getTransactionByReference,
} from "./transactions.handler";

export default {
  getBankList,
  validateBankAccount,
  bankTransfer,
  getAllTransactions,
  getTransactionByReference,
};
