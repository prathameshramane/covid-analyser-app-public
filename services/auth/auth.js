import clientInstance from "../client";
import authStorage from "./storage";
import API_CONFIGS from "../../constants/api-configs";

const CONFIGS = {
  client_id: API_CONFIGS.CLIENT_ID,
  client_secret: API_CONFIGS.CLIENT_SECRET,
  grant_type: API_CONFIGS.GRANT_PASSWORD,
};

const loginUser = (email, password) =>
  clientInstance
    .post("/auth/token/", { ...CONFIGS, username: email, password })
    .then((response) => {
      if (!response.ok) return response;

      authStorage.storeToken(response.data.access_token);
      return response;
    });

const registerUser = (userData) =>
  clientInstance.post("/api/user/register/", userData);

const getUser = async () => {
  const token = await authStorage.getToken();
  if (!token) return null;

  const response = await clientInstance.get("/api/user");
  if (!response.ok) {
    authStorage.removeToken();
    return null;
  }
  return response.data;
};

const logout = () => {
  authStorage.removeToken();
};

export default { loginUser, getUser, logout, registerUser };
