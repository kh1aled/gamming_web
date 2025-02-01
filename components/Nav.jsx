"use client";

import { useState } from "react";
import "./styles/nav.css";
import Link from "@node_modules/next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container conmx-auto lg:px-8">
        <div className="flex flex-row-reverse nav_inside h-20 items-center justify-start position-relative">
          <div className="header-actions flex justify-around">
            <button className="cart-btn" aria-label="cart">
              <ion-icon
                name="cart"
                className="md hydrated flex-center"
              ></ion-icon>

              <span className="cart-badge">0</span>
            </button>

            <button
              className="search-btn"
              aria-label="open search"
              data-search-toggler=""
            >
              <ion-icon
                name="search-outline"
                className="md hydrated"
              ></ion-icon>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="list_btn items-center justify-center bg-gray-800 p-1  hover:bg-gray-700 text-white"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block size-9"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={`flex items-center list_items ${isOpen ? "open" : ""}`}
          >
            <div className="list_items_inside lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link
                  href="#landing"
                  className="px-3 py-2 text-sm font-medium text-white "
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="#live"
                  className="px-3 py-2 text-sm font-medium text-white  "
                >
                  Lives
                </Link>
                <Link
                  href="#featured"
                  className="px-3 py-2 text-sm font-medium text-white  "
                >
                  Feauters
                </Link>
                <Link
                  href="#products"
                  className="px-3 py-2 text-sm font-medium text-white "
                >
                  Shop
                </Link>
                <Link
                  href="#blog"
                  
                  className="px-3 py-2 text-sm font-medium text-white  "
                >
                  Blog
                </Link>
                <Link
                  href="#footer"
                  className="px-3 py-2 text-sm font-medium text-white  "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="title">Gamics</div>
          {/* <div className="-mr-2 flex md:hidden">
           
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
