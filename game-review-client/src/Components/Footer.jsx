export default function Footer() {
  return (
    <footer className='bg-gray-100 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-300'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current text-indigo-500"
            >
              <path d="M22.672 15.226..."></path>
            </svg>
            <span className='text-2xl font-semibold text-gray-800 dark:text-white'>
              GameZone
            </span>
          </div>
          <p className='ml-3 font-semibold dark:text-gray-400'>
            Explore, review, and share your favorite games. Providing a chill
            experience for gamers since 2024.
          </p>
        </div>

        <div className="dark:text-gray-400">
          <h6 className="text-lg font-semibold mb-3 text-gray-800">Services</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Game Reviews
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Recommendations
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Community Forums
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        <div className="dark:text-gray-400">
          <h6 className="text-lg font-semibold mb-3 text-gray-800">Company</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div className="dark:text-gray-400">
          <h6 className="text-lg font-semibold mb-3 text-gray-800">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-500 transition duration-300" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-300 pt-5">
        <p className="text-gray-500 dark:text-gray-200 text-sm">
          © 2024 Chill Gamer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
