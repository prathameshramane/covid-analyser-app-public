import clientInstance from "../client";

const getPastDisease = () => clientInstance.get("/api/user/past-disease/");

export default getPastDisease;
