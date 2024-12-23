"use client";

import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  // Aggregate function
  const aggregateData = (key: string) => {
    const groupedData = articles.reduce((acc, article) => {
      const value = Array.isArray(article[key])
        ? article[key][0]
        : article[key]; // Handle arrays
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return { labels, data };
  };

  // Trends
  const authorTrends = aggregateData("authorName");
  const categoryTrends = aggregateData("categoryNames");

  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Analytics Dashboard
      </h1>

      {/* Author Trends */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
          Trends by Author
        </h2>
        <Bar
          data={{
            labels: authorTrends.labels,
            datasets: [
              {
                label: "Articles by Author",
                data: authorTrends.data,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>

      {/* Category Trends */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
          Trends by Category
        </h2>
        <Line
          data={{
            labels: categoryTrends.labels,
            datasets: [
              {
                label: "Articles by Category",
                data: categoryTrends.data,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                fill: true,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
