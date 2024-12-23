import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "@/services/NewsService";
import Data from "@/lib/MOCK.json";

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  try {
    // let response = fetchNews();
    let response = Data;
    if (response.status === "SUCCESS" && Array.isArray(response.data.articles)) {
      return response.data.articles.map((article) => ({
        id: article.hashId,
        title: article.title,
        author: article.authorName || "Unknown",
        content: article.content,
        source: article.sourceName,
        url: article.sourceUrl,
        imageUrl: article.imageUrl,
        categories: article.categoryNames,
        score: article.score,
        createdAt: new Date(article.createdAt).toISOString(),
      }));
    } else {
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to fetch articles.");
  }
});

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default articlesSlice.reducer;
