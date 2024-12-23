import axios from "axios";
import Data from "@/lib/MOCK.json"
export function fetchNews() {
  try {
    // const response = axios.get("/api/news");
    //   return response.data;
      return Data;
  } catch (error) {
      console.error("Failed to fetch news:", error);
      return Data;
    // throw new Error("Could not fetch news from API.");
  }
}
