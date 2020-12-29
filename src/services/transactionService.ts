import { apiClient } from "@/services/apiService";
import TransactionModel from "@/models/transaction/transactionModel";
import TransactionCreateModel from "@/models/transaction/transactionCreateModel";
import TransactionQueryModel from "@/models/transaction/transactionQueryModel";

export default {
  async getTransactions(model: TransactionQueryModel) {
    const response = await apiClient.get<Array<TransactionModel>>(
      "transaction",
      { params: { ...model } }
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
