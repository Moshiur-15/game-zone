import bannerN from "../assets/bannern.jpg";
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import n4 from "../assets/n4.jpg";
import n5 from "../assets/n5.jpg";
import n6 from "../assets/n6.jpg";
import n7 from "../assets/n7.jpg";
import n8 from "../assets/n8.jpg";
import n9 from "../assets/n9.jpg";


export default function LatestNews() {
    const data = [
      {
        id: 1,
        title: "PlayStation 5",
        date: "October 16, 2022",
        image: n1,
      },
      {
        id: 2,
        title: "Xbox Controller",
        date: "October 16, 2022",
        image: n2,
      },
      {
        id: 3,
        title: "Nintendo Switch",
        date: "October 16, 2022",
        image: n3,
      },
      {
        id: 4,
        title: "Gaming Setup",
        date: "October 16, 2022",
        image: n4,
      },
      {
        id: 5,
        title: "White Controller",
        date: "October 16, 2022",
        image: n5,
      },
      {
        id: 6,
        title: "RGB Controller",
        date: "October 16, 2022",
        image: n6,
      },
      {
        id: 7,
        title: "Dark Controller",
        date: "October 16, 2022",
        image: n7,
      },
      {
        id: 8,
        title: "Blue JoyCon",
        date: "October 16, 2022",
        image: n8,
      },
      {
        id: 9,
        title: "Red JoyCon",
        date: "October 16, 2022",
        image: n9,
      },
    ];
  
    return (
      <section>
        <div className="relative">
          <div>
            <img
              className="w-full h-[350px] md:h-[400px] lg:h-[420px] xl:h-[500px] object-cover"
              src={bannerN}
              alt="Latest News"
            />
            <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-center">
            <h2 className="text-4xl font-bold mb-4">Latest News</h2>
            <p className="max-w-lg mx-auto mb-6">
              Stay updated with the latest happenings in the gaming world, from
              new releases to exciting updates and events.
            </p>
          </div>
        </div>
  
        <section className="dark:bg-gray-700 min-h-[calc(100vh-300px)]">
          <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
              Our Latest News
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Explore the latest in gaming!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    );
  }
  
