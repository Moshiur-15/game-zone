import { FaArrowRightLong, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaFacebook, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_etvjk7k", "template_62npc1b", form.current, {
        publicKey: "3eOT6dB9zWU0c1M1F",
      })
      .then(
        (res) => {
          console.log("SUCCESS!");
          console.log(res);
          form.current.reset();
          Swal.fire({
            title: "Message Sent!",
            text: "Your message has been successfully sent.",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="py-12 px-2 md:px-24 xl:px-0 dark:bg-gray-800">
      <h2 className="dark:text-gray-300 text-4xl uppercase font-bold text-gray-800 text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-10 rounded-lg shadow-lg bg-blue-50 dark:bg-gray-700 h-full transition"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-2"
            >
              FULL NAME <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="fullName"
              name="from_name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-400 border-none focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-2"
            >
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="from_email"
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-400 border-none focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 dark:text-gray-300 mb-2"
            >
              MESSAGE <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-400 border-none focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            value="Send"
            className="w-full font-medium py-4 border border-blue-300 dark:border-gray-500 rounded-full shadow-lg flex items-center justify-center gap-2 dark:text-gray-300 transition"
          >
            <span>SEND MESSAGE</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </form>

        {/* Right Side */}
        <section className="p-10 rounded-lg shadow-lg bg-blue-50 dark:bg-gray-700 h-full transition">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-300 mb-8">
            GET IN TOUCH
          </h2>

          <div className="p-5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 text-2xl mr-4">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      masiurislam28@email.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 text-2xl mr-4">
                    <FaPhone />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +8801327023639
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +8801615209724
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 text-2xl mr-4">
                    <FaWhatsapp className="text-3xl" />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                      Whatsapp
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +8801327023639
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 dark:text-yellow-400 text-2xl mr-4">
                    <FaLocationDot />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Patuakhali, Bangladesh
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side - Social Links */}
            <div className="text-center mt-6">
              <div className="border border-gray-400/60 dark:border-gray-600 mb-5"></div>
              <div className="flex space-x-6 mt-6">
                <a
                  href="mailto:masiurislam28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-red-500 hover:text-red-600 dark:hover:text-red-400 transition duration-300"
                >
                  <FaEnvelope />
                </a>

                <a
                  href="https://wa.me/+8801327023639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
