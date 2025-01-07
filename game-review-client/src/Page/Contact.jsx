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
    <section className="py-12 px-2 mx-2 md:mx-24 xl:mx-0">
      <h2 className="text-4xl uppercase font-bold text-gray-800 text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-10 rounded-lg shadow-lg bg-blue-50 h-full"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              FULL NAME <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="fullName"
              name="from_name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="from_email"
              type="email"
              id="email"
              placeholder="Enter Yoyr Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              MESSAGE <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-200  placeholder-gray-400 border border-gray-600 focus:outline-none border-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            value="Send"
            className="w-full font-medium py-4 border border-blue-300 rounded-full shadow-lg flex items-center justify-center gap-2"
          >
            <span>SEND MESSAGE</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </form>

        {/* right side */}
        <section className="p-10 rounded-lg shadow-lg bg-blue-50 h-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            GET IN TOUCH
          </h2>

          <div className="p-5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 text-2xl mr-4">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">masiurislam28@email.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-2xl mr-4">
                    <FaPhone />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+8801327023639</p>
                    <p className="text-gray-600">+8801615209724</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-2xl mr-4">
                    <FaWhatsapp className="text-3xl" />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Whatsapp
                    </h4>
                    <p className="text-gray-600">+8801327023639</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 text-2xl mr-4">
                    <FaLocationDot />
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      Location
                    </h4>
                    <p className="text-gray-600 w-max">
                      Patuakhali, Bangladesh
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Side - Social Links */}
            <div className="text-center mt-6">
              <div className="border border-gray-400/60 mb-5"></div>
              <div className="flex space-x-6 mt-6">
                {/* Email */}
                <a
                  href="mailto:masiurislam28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-red-500 hover:text-red-600 transition duration-300"
                >
                  <FaEnvelope />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+8801327023639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 text-3xl cursor-pointer hover:text-green-600 transition" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 text-3xl cursor-pointer hover:text-blue-700 transition" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-500 text-3xl cursor-pointer hover:text-blue-700 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
