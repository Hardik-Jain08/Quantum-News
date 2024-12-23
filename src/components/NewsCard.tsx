export default function NewsCard({ article }) {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-bold">{article.title}</h3>
      <p>
        By {article.author || "Unknown"} on{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" className="text-blue-500">
        Read more
      </a>
    </div>
  );
}
