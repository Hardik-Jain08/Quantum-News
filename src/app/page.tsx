"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import MockData from "@/lib/MOCK.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "@/redux/slices/articlesSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";

export default function Home() {
  const dispatch = useDispatch();

  // Access articles and status from Redux
  const { articles, status, error } = useSelector(
    (state: RootState) => state.articles
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArticles());
    }
  }, [dispatch, status]);

  // Decide the source of data: fetched articles or mock data
  const data =
    status === "succeeded" && articles.length > 0
      ? articles
      : MockData.data.articles;

  const products = data
    .filter((item: any) => item.imageUrl && item.imageUrl !== "None")
    .map((item: any) => ({
      title: item.title,
      link: item.url || item.sourceUrl,
      thumbnail: item.imageUrl,
    }));

  // Render error message if API fetch fails
  if (status === "failed") {
    return (
      <main>
        <div className="error-message">
          <h2>Error Loading News</h2>
          <p>{error || "Something went wrong. Please try again later."}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeroParallax products={products} />
    </main>
  );
}
