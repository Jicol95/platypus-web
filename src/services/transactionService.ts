import { apiClient } from "@/services/apiService";
import TransactionModel from "@/models/transaction/transactionModel";
import TransactionCreateModel from "@/models/transaction/transactionCreateModel";

export default {
  async getTransactions() {
    const response = await apiClient.get<Array<TransactionModel>>(
      "transaction"
    );
    return response.data;
  },
  async createTransaction(
    model: TransactionCreateModel
  ): Promise<TransactionModel> {
    const response = await apiClient.post<TransactionModel>(
      "transaction",
      model
    );

    return response.data;
  }
};
