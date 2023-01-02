import { create } from "apisauce";

import authStorage from "./auth/storage";
import API_CONFIGS from "../constants/api-configs";

const apiClient = create({
  baseURL: API_CONFIGS.API_URL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
