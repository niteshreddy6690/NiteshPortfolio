"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef<any>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("service_famidlq", "template_6jyl0id", e.target, {
        publicKey: "VTZswmsyR_NL8nOFl",
      })
      .then(
        () => {
          toast.success("Successfully sent email", {
            // style: {
            //   borderRadius: "5px",
            //   border: "1px solid gray",
            //   background: "#f5f5f5",
            //   color: "#c7d300",
            // },
          });
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="text-center w-full text-primary-color sm:h-full md:h-[100vh] max-w-[1440px]my flex items-center justify-center relative"
    >
      <div>
        <h1 className=" text-5xl md:text-6xl font-semibold py-2">Contact</h1>
        <h3 className="py-2 text-sm md:text-lg text-text-color">
          Feel free to reach out to me for any questions or opportunities
        </h3>
        <div className=" flex flex-col lg:flex-row gap-20 md:m-4 lg:mt-20">
          <div className="mt-6">
            <h2 className=" text-2xl md:text-4xl font-semibold mb-2 text-white ">
              Contact Info
            </h2>
            <p className=" text-sm md:text-lg text-text-color  ">
              you can reach out to me through below means
            </p>
            <div className="mt-10 text-text-color">
              <div className="flex justify-start items-center py-2">
                <div className=" w-16 h-16 rounded-full border-2 border-slate-300 hover:border-primary-color flex items-center justify-center">
                  <MdOutlineMailOutline className="text-3xl" />
                </div>
                <div className="flex-1 text-left pl-4">
                  <p>workmail.nitesh.s@gmail.com</p>
                  <p>Niteshreddy1310@gmail.com</p>
                </div>
              </div>
              <div className="flex justify-start items-center py-2 ">
                <div className=" w-16 h-16 rounded-full border-2 border-slate-300 hover:border-primary-color flex items-center justify-center">
                  <FaPhoneAlt className="text-3xl" />
                </div>
                <div className="flex-1 text-left pl-4">
                  <span className="mr-1">+91</span>
                  <span className="text-primary-color">|</span>
                  <span className="ml-1">9901145387</span>
                </div>
              </div>
              <div className="flex justify-start items-center py-2">
                <div className=" w-16 h-16 rounded-full border-2 border-slate-300 hover:border-primary-color flex items-center justify-center">
                  <FaLocationDot className="text-3xl" />
                </div>
                <div className="flex-1 text-left pl-4">
                  <span className="mr-1">Bengaluru</span>
                  <span className="text-primary-color">,</span>
                  <span className="ml-1">karnataka</span>
                  <p>India</p>
                </div>
              </div>
            </div>
            <div className="flex text-sm md:text-lg  text-center my-4  text-text-color">
              <Link
                href="https://www.instagram.com/nitesh_s_reddy/"
                className="hover:text-primary-color"
                target="_blank"
              >
                <FaInstagram className="h-8 w-8 inline" />
                <span className="ml-1">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nitesh-s-aa35b1136/"
                className=" hover:text-primary-color"
                target="_blank"
              >
                <FaLinkedin className="h-8 w-8 inline" />
                <span className="ml-1">Linked In</span>
              </Link>
              <Link
                href="https://github.com/niteshreddy6690"
                target="_blank"
                className="hover:text-primary-color"
              >
                <FaGithub className="h-8 w-8 inline" />
                <span className="ml-1">github</span>
              </Link>
            </div>
          </div>
          <div className="max-w-[600px] px-2 text-white">
            <h3 className="py-2 text-xl ">Email me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                className="w-full outline-none bg-transparent border-b-2 py-6"
                placeholder="Your Email"
                name="email"
                value={formData?.email || ""}
                onChange={(e) => handleFormData(e)}
              />
              <input
                type="text"
                className="  w-full md:w-[48%] outline-none bg-transparent border-b-2 py-6 mt-2"
                placeholder="Your Name"
                onChange={(e) => handleFormData(e)}
                value={formData?.name || ""}
                name="name"
              />
              <input
                type="tel"
                className=" w-full md:w-[48%] md:ml-4 outline-none bg-transparent border-b-2 py-6 mt-2"
                placeholder="Phone Number"
                onChange={(e) => handleFormData(e)}
                value={formData?.phone || ""}
                name="phone"
              />
              <input
                type="text"
                className="w-full outline-none bg-transparent border-b-2 py-6 mt-2"
                placeholder="Subject"
                onChange={(e) => handleFormData(e)}
                value={formData?.subject || ""}
                name="subject"
              />
              <textarea
                className="bg-transparent  outline-none  w-full border-b-2 mt-6 h-28 max-h-[100px]"
                placeholder="Your Message"
                onChange={(e) => handleFormData(e)}
                value={formData?.message || ""}
                name="message"
              ></textarea>
              <button
                type="submit"
                className="p-4 bg-primary-color text-black text-xl w-60 my-10 rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
