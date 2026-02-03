import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const scanDarkWeb = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/scan-darkweb`);
    return response.data;
  } catch (error) {
    console.error("Error scanning dark web", error);
    return { status: "error", fake_ads_found: [] };
  }
};
