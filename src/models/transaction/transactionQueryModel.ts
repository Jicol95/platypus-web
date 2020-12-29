export default interface TransactionQueryModel {
  bankAccountId: string | null;
  fromUtc: string;
  toUtc: string | null;
}
