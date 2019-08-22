import Api from "./api_config";
export default {
  // **** POST **** //
  login: params => Api.post("/users/login", params),
  signup: params => Api.post("/users/register", params),
  profile: params => Api.get("/profile/profile", params),
  user: params => Api.get("/users/users", params),
  searchUser: params => Api.post("/users/users", params)
};



