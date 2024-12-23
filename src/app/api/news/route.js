import axios from "axios";
import Data from "@/lib/MOCK.json";

export function GET() {
  const url2 = "https://inshorts.vercel.app/news/all?offset=0&limit=100";

  try {
    // const response = await axios.get(url2);
    return Data; // Ensure you're returning the response body
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error response:", error.response?.data || "No response data");
      console.error("Axios error status:", error.response?.status || "No status");
    } else {
      console.error("Non-Axios error:", error);
    }

    return Data; // Fallback to mock data
  }
}
