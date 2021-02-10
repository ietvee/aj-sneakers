import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg relative">
        <a href="/">
          <h3 className="font-bold px-6 text-3xl text-gray-700">AJ SNEAKERS</h3>
        </a>

        <ul>
          <Link to="/shop">
            <li className="text-gray-700">Shop</li>
          </Link>
        </ul>
      </nav>

      <div className="border-b border-gray-100"></div>
    </>
  );
}

export default Nav;
