import Link from "next/link";
import json from "../json/dummy-json.json";
export default async function Highlights() {
  const highlights = json["top_5_highlights"];
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Top 5 Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {highlights.map(({ id, title, news }) => (
          <Link
            key={title}
            href={`/${id}`}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{news}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
