import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";
import NewRelease from "../Components/NewRelease";
import FavriteGame from "../Components/FavriteGame";
import Category from "../Components/Category";
import LatestHome from "../Components/LatestHome";
import FAQ from "../Components/FAQ";
import Gallery from "../Components/Galary";
export default function Home() {
  return (
    <section className="dark:bg-gray-950">
      <div>
        <Banner />
      </div>
      <div className="container mx-auto my-10 lg:my-16 xl:my-20">
        <Category />
      </div>
      <div className="container mx-auto">
        <HighestRated />
      </div>
      <div className="my-10 lg:my-16 xl:my-20 dark:py-10 dark:bg-[url('https://i.ibb.co.com/mCJ1mHjs/2d3748-1.png')] bg-no-repeat bg-cover">
        <div className="container mx-auto">
          {/* <FavriteGame /> */}
          <NewRelease />
        </div>
      </div>

      <div className="container mx-auto my-10 lg:my-16 xl:my-20">
        <LatestHome />
      </div>

      <div className="pb-10 lg:pb-16 xl:pb-20 dark:pt-10 dark:bg-[url('https://i.ibb.co.com/DPGmCdNB/2d3748-3.png')] bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <FAQ />
          {/* <Gallery/> */}
        </div>
      </div>
    </section>
  );
}
