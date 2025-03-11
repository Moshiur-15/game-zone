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
import Title from "./sheard/title";

export default function LatestHome() {
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
      <div className="px-4 py-8">
        <Title title="Latest News" />
        <p className="max-w-lg  mb-8 text-center text-lg text-gray-500 mx-auto">
          Stay updated with the latest happenings in the gaming world, from new
          releases to exciting updates and events.
        </p>
        <div className="group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.slice(0, 6).map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg shadow-xl">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-110 transform transition-all duration-1000 "
                />
              </div>
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
  );
}
