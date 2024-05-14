import Categories from "./components/Cateogires";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <>
      <header className="bg-gray-900 flex items-center justify-center py-4">
        <h1 className="text-4xl font-bold text-white">
          One <span className="text-medius">medius</span>
        </h1>
      </header>
      <section className="py-12 px-2 md:px-3">
        <div className="px-4 mx-auto">
          <Highlights />
          <Categories />
        </div>
      </section>
    </>
  );
}
