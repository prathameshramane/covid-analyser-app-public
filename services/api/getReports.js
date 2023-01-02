import clientInstance from "../client";

const getReports = () => clientInstance.get("/api/user/reports/");

export default getReports;
