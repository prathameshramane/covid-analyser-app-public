import clientInstance from "../client";

const updatePastDisease = (data) =>
  clientInstance.post("/api/user/past-disease/", data);

export default updatePastDisease;
