import { fetchNews } from "@/services/NewsService";
import Data from "@/lib/MOCK.json";

export async function getFilteredNews(filters: {
  author?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
  urlToImage?: string;
}) {
  try {
    // let news = await fetchNews();
    let news :any = Data;
    news = news.data.articles;
    return news.filter((item: any) => {
      if (filters.author && item.author !== filters.author) return false;
      if (filters.type && item.type !== filters.type) return false;
      if (filters.startDate && new Date(item.createdAt) < new Date(filters.startDate)) return false;
      if (filters.endDate && new Date(item.createdAt) > new Date(filters.endDate)) return false;
      if (filters.urlToImage && item.imageUrl !== filters.urlToImage) return false;
      return true;
    });
  } catch (error) {
    console.error("Error filtering news:", error);
    throw new Error("Failed to fetch or filter news.");
  }
}
