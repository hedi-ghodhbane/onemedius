import Link from "next/link";
import json from "../json/dummy-json.json";
export default function NewsDetails({
  params,
}: {
  params: { newsId: string };
}) {
  const news = [
    ...Object.keys(json.categories_and_highlights).map(
      (key) =>
        json.categories_and_highlights[
          key as keyof typeof json.categories_and_highlights
        ]
    ),
    ...json.top_5_highlights,
  ]
    .flat()
    .find((news) => news.id == params.newsId);
  if (!news) return <h1>Not found</h1>;
  return (
    <div className="flex flex-col container relative gap-4 my-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <Link href="/" className="absolute top-2 right-2 font-bold">
        Back
      </Link>
      <h1 className="text-2xl font-semibold">{news.title}</h1>
      <p>{news.news}</p>
    </div>
  );
}
