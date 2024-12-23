import axios from "axios";
import Data from "@/lib/MOCK.json";
import { NextResponse } from 'next/server';

export async function GET() {
  // const url2 = "https://inshorts.vercel.app/news/all?offset=0&limit=100";

  try {
    // const response = await axios.get(url2);
    return NextResponse.json(response.data); // Ensure you're returning the response body
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error response:", error.response?.data || "No response data");
      console.error("Axios error status:", error.response?.status || "No status");
    } else {
      console.error("Non-Axios error:", error);
    }

    return NextResponse.json(Data); // Fallback to mock data
  }
}