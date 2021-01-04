import { apiClient } from "@/services/apiService";
import ValueDescriptionModel from "@/models/valueDescriptionModel";

export default {
  async getTransactionCategories() {
    const response = await apiClient.get<
      Array<ValueDescriptionModel<string, string>>
    >("constant/transactionCategories");
    return response.data;
  }
};
