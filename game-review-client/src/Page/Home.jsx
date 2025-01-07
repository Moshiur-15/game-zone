import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";
import NewRelease from "../Components/NewRelease";
import FavriteGame from "../Components/FavriteGame";
import Category from "../Components/Category";
import LatestHome from "../Components/LatestHome";
export default function Home() {
  return (
    <section className="dark:bg-gray-950">
      <div>
        <Banner />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <HighestRated />
      </div>
      <div className="container mx-auto space-y-10">
        <Category />
      </div>
      <FavriteGame />
      <div className="container mx-auto">
        <LatestHome />
      </div>
      <div className="dark:bg-gray-900">
        <NewRelease />
      </div>
    </section>
  );
}
