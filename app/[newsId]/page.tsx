import Link from "next/link";
import Image from "next/image";
import json from "../json/dummy-json.json";
import { ChevronLeft } from "lucide-react";
import img from "../team.jpg";
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
    <>
      <header className="bg-gray-900 flex items-center relative justify-center py-4">
        <Link
          href="/"
          className="text-white absolute top-1/2 -translate-y-1/2 left-4"
        >
          <ChevronLeft size={40} />
        </Link>

        <h1 className="text-4xl font-bold text-white">
          One <span className="text-medius">medius</span>
        </h1>
      </header>

      <div className="flex flex-col container  gap-4 my-8  bg-white shadow-lg dark:bg-gray-800 p-8 rounded-lg">
        <h1 className="text-2xl font-semibold">{news.title}</h1>
        <p>{news.news}</p>
        {"withImage" in news && news.withImage == true && (
          <Image
            className="self-center py-2"
            src={img}
            alt="team"
            quality={70}
            width={800}
            height={800}
          />
        )}
        {"article" in news && news.article && (
          <>
            <h2 className="text-xl font-semibold">Article:</h2>
            <div dangerouslySetInnerHTML={{ __html: news.article }} />
          </>
        )}
      </div>
    </>
  );
}
