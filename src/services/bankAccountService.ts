import { apiClient } from "@/services/apiService";
import BankAccountCreateModel from "@/models/bankAccount/bankAccountCreateModel";
import BankAccountModel from "@/models/bankAccount/bankAccountModel";

export default {
  async getBankAccounts() {
    const response = await apiClient.get<Array<BankAccountModel>>(
      "bankaccount"
    );
    return response.data;
  },
  async createBankAccount(
    model: BankAccountCreateModel
  ): Promise<BankAccountModel> {
    const response = await apiClient.post<BankAccountModel>(
      "bankaccount",
      model
    );

    return response.data;
  }
};
