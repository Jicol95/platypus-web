import TransactionCreateModel from "./transactionCreateModel";

export default interface TransactionModel extends TransactionCreateModel {
  transactionId: string;
  categoryDescription: string;
}
