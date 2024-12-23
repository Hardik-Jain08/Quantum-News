import React from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

function ExportButton({ articles, payoutAmounts }) {
  const handleExportToExcel = () => {
    const dataForExport = articles.map((article) => ({
      Title: article.title,
      Author: article.author || "Unknown Author",
      Date: new Date(article.publishedAt).toLocaleDateString(),
      PayoutAmount: payoutAmounts[article.url] || 0,
    }));

    const ws = XLSX.utils.json_to_sheet(dataForExport);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Payouts");
    XLSX.writeFile(wb, "Payouts.xlsx");
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();

    let y = 10;
    doc.text("Payouts Report", 14, y);
    y += 10;

    articles.forEach((article) => {
      const payoutAmount = payoutAmounts[article.url] || 0;
      doc.text(
        `${article.title} - ${article.author || "Unknown Author"} - ${new Date(
          article.publishedAt
        ).toLocaleDateString()} - $${payoutAmount.toFixed(2)}`,
        14,
        y
      );
      y += 10;
    });

    doc.save("Payouts.pdf");
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleExportToExcel}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700"
      >
        Export to Excel
      </button>
      <button
        onClick={handleExportToPDF}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700"
      >
        Export to PDF
      </button>
    </div>
  );
}

export default ExportButton;
