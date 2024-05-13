import Categories from "./components/Cateogires";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <section className="py-12 px-2 md:px-3">
      <div className="px-4 mx-auto">
        <Highlights />
        <Categories />
      </div>
    </section>
  );
}
