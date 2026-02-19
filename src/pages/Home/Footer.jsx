import React from "react";
import {
  quickLinks,
  categories,
  contact,
  socials,
} from "../../constants/Index";
import { MdOutlineSchool } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      id="about"
      className="bg-slate-900 text-slate-400 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 text-white mb-6">
              <MdOutlineSchool className="text-blue-600 text-2xl" />
              <span className="text-xl font-bold">EduEvents</span>
            </div>
            <p className="text-sm">
              Connecting students, faculty, and campus life through a seamless
              event management experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-sm">
              {categories.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              {contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex gap-3 items-center">
                    <Icon className="text-blue-600" />
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
          <p className="text-xs">
            © 2024 EduEvents College Portal. All rights reserved.
          </p>

          <div className="flex gap-6">
            {socials.map((Icon, index) => (
              <Icon key={index} className="text-gray-400 text-2xl" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;