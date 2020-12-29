export default interface TransactionCreateModel {
  type: number;
  category: string;
  vendorName: string;
  amount: number;
  purchaseDateUtc: string;
  bankAccountId: string;
}
