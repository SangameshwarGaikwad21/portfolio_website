import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">CodeWithSangam</h1>

        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;