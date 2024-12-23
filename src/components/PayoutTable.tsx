import React, { useState, useEffect } from "react";

function PayoutTable({ articles = [], payoutAmounts }) {
  const [payoutAmountsState, setPayoutAmounts] = useState({});

  useEffect(() => {
    // Initialize payout amounts state when articles are loaded
    if (Array.isArray(articles) && articles.length > 0) {
      setPayoutAmounts(
        articles.reduce((acc, article) => {
          acc[article.url] = 0; // Initialize payout amounts with 0 for each article
          return acc;
        }, {})
      );
    }
  }, [articles]); // Re-run this when articles change

  const handlePayoutChange = (url, amount) => {
    setPayoutAmountsState((prev) => ({
      ...prev,
      [url]: amount,
    }));
  };

  return (
    <table className="min-w-full table-auto border-collapse text-left bg-white dark:bg-gray-800">
      <thead className="bg-indigo-600 text-white dark:bg-indigo-800">
        <tr>
          <th className="px-6 py-3 font-semibold text-sm">Image</th>
          <th className="px-6 py-3 font-semibold text-sm">Title</th>
          <th className="px-6 py-3 font-semibold text-sm">Author</th>
          <th className="px-6 py-3 font-semibold text-sm">Published Date</th>
          <th className="px-6 py-3 font-semibold text-sm">Payout Amount</th>
        </tr>
      </thead>
      <tbody>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {/* Image Column */}
              <td className="px-6 py-4">
                {article.urlToImage && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-24 h-16 object-cover rounded-md shadow-sm"
                    />
                  </a>
                )}
              </td>

              {/* Title Column */}
              <td className="px-6 py-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline dark:text-indigo-400"
                >
                  {article.title}
                </a>
              </td>

              {/* Author Column */}
              <td className="px-6 py-4">
                {article.author ? article.author : "Unknown Author"}
              </td>

              {/* Date Column */}
              <td className="px-6 py-4">
                {article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No Date"}
              </td>

              {/* Payout Amount Column */}
              <td className="px-6 py-4">
                <input
                  type="number"
                  value={payoutAmountsState[article.url] || 0}
                  onChange={(e) =>
                    handlePayoutChange(
                      article.url,
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="border rounded px-2 py-1 w-24 text-right dark:bg-gray-700 dark:text-white"
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan="5"
              className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
            >
              No articles found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PayoutTable;
