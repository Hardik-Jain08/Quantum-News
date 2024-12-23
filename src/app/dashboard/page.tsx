'use client';
import { useEffect, useState } from "react";
import DashboardFilters from "@/components/DashboardFilters";
import PayoutTable from "@/components/PayoutTable";
import GlobalSearchBar from "@/components/GlobalSearchBar";
import ExportButton from "@/components/ExportButton";
import { fetchNews } from "@/services/NewsService"; // Use your service for fetching articles

export default function DashboardPage() {
  const [articles, setArticles] = useState([]); // Store articles
  const [filteredArticles, setFilteredArticles] = useState([]); // Store filtered articles
  const [payoutAmounts, setPayoutAmounts] = useState({}); // Store payout amounts
  const [searchTerm, setSearchTerm] = useState(""); // Store search term
  const [filters, setFilters] = useState({
    author: "",
    dateRange: { start: null, end: null },
    type: "",
  });

  // Fetch articles on component mount
  useEffect(() => {
    function loadArticles() {
      try {
        let data = fetchNews(); // Fetch data from API
        console.log(data);
        data = data.data.articles;
        // Ensure that data is an array before setting it
        if (Array.isArray(data)) {
          setArticles(data); // Set the articles to state
          setFilteredArticles(data); // Set the initial filtered articles
        } else {
          console.error("Fetched data is not an array", data);
          setArticles([]); // Set to empty array if data is not valid
          setFilteredArticles([]); // Reset filtered articles
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]); // Handle error case
        setFilteredArticles([]); // Handle error case
      }
    }

    loadArticles(); // Call the function
  }, []);

  // Filter articles whenever filters or searchTerm changes
  useEffect(() => {
    if (Array.isArray(articles)) {
      const filtered = articles.filter((article) => {
        const matchesAuthor = filters.author
          ? article.author?.toLowerCase().includes(filters.author.toLowerCase())
          : true;
        const matchesType = filters.type ? article.type === filters.type : true;
        const matchesDateRange =
          filters.dateRange.start && filters.dateRange.end
            ? new Date(article.publishedAt).getTime() >=
                new Date(filters.dateRange.start).getTime() &&
              new Date(article.publishedAt).getTime() <=
                new Date(filters.dateRange.end).getTime()
            : true;
        const matchesSearchTerm = searchTerm
          ? article.title.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        return (
          matchesAuthor && matchesType && matchesDateRange && matchesSearchTerm
        );
      });

      setFilteredArticles(filtered); // Update filtered articles
    }
  }, [filters, searchTerm, articles]);

  // Calculate total payout amount
  const totalPayoutAmount = Array.isArray(filteredArticles)
    ? filteredArticles.reduce((total, article) => {
        const payout = payoutAmounts[article.url] || 0;
        return total + payout;
      }, 0)
    : 0;

  return (
    <div className="p-6 mt-20 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
        Dashboard
      </h1>

      <div className="mb-6">
        <GlobalSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <div className="mb-6 space-x-4 flex justify-between">
        <DashboardFilters filters={filters} setFilters={setFilters} />
        <ExportButton
          articles={filteredArticles}
          payoutAmounts={payoutAmounts}
        />
      </div>

      {/* Display Total Payout */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          Total Payout: ${totalPayoutAmount.toFixed(2)}
        </h2>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <PayoutTable
          articles={filteredArticles}
          payoutAmounts={payoutAmounts}
          setPayoutAmounts={setPayoutAmounts}
        />
      </div>
    </div>
  );
}
