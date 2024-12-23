import axios from "axios";
import Data from "@/lib/MOCK.json"
export async function fetchNews() {
  try {
    const response = await axios.get("/api/news");
    return response.data;
  } catch (error) {
      console.error("Failed to fetch news:", error);
      return Data;
    // throw new Error("Could not fetch news from API.");
  }
}