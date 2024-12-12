import React from "react";
import logo from "/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-10 py-8">
      <footer>
        {/* top section */}
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-center mb-10">
          {/* icon-navigation section */}
          <div className="md:w-1/2 w-full">
            <img src={logo} alt="logo" className="size-28 my-10 " />
            <ul className="flex gap-4 flex-wrap mb-4 md:mb-0 ">
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#"
                  className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#top-sellers"
                  className="hover:text-primary">
                  Top Sellers
                </a>
              </li>
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#recommended"
                  className="hover:text-primary">
                  Recommended
                </a>
              </li>
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#blogs"
                  className="hover:text-primary">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          {/* newsletter section */}
          <div className="md:w-1/2 w-full ">
            <p className="mb-4">
              Subscribe to our newsletter to recieve latest updates, news and
              offers.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-primary py-2 px-4 rounded-r-md hover:bg-yellow-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6 ">
          {/* privacy section */}
          <div>
            <ul className="flex gap-4 mb-4 md:mb-0 ">
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#"
                  className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://trailed-v2.vercel.app/#"
                  className="hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* social section */}
          <div className="flex gap-6">
            <a
              href="https://saamjs.vercel.app/"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaFacebook size={24} />{" "}
            </a>
            <a
              href="https://in.linkedin.com/in/saam-sheron"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaTwitter size={24} />{" "}
            </a>
            <a
              href="https://www.instagram.com/saam_sheron/"
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaInstagram size={24} />{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
