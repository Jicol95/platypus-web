import BankAccountCreateModel from "@/models/bankAccount/bankAccountCreateModel";

export default interface BankAccountModel extends BankAccountCreateModel {
  bankAccountId: string;
}
