"use client";
import { Button } from "@/components/ui/button";
import json from "../json/dummy-json.json";
import { useState } from "react";
import Link from "next/link";
export default function Categories() {
  const categories = Object.keys(json.categories_and_highlights) as Array<
    keyof typeof json.categories_and_highlights
  >;
  const [category, setCategory] = useState<
    keyof typeof json.categories_and_highlights
  >(categories[0]);

  const news = json.categories_and_highlights[category];

  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">News Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <Button
              onClick={() => setCategory(cat)}
              key={cat}
              className={`text-sm border bg-white border-medius text-medius  ${
                cat == category ? "bg-medius text-white" : ""
              }`}
              variant={"outline"}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(({ id, title, news }) => (
            <Link
              href={`/${id}`}
              key={title}
              className="bg-white border-2 border-medius shadow-lg dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{news}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
