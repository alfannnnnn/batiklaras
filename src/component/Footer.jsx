import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-black">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
          <span className="text-xs lg:text-sm text-white text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Batik Laras Purwokerto
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
