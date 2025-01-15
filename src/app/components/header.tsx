



import Image from "next/image";
import logo from "../components/public/images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="bg-black w-full">
        <nav className="container mx-auto flex flex-wrap items-center justify-between p-4 lg:p-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={logo} alt="logo" width={150} height={100} />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="block lg:hidden">
            <button
              id="menu-toggle"
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            id="menu"
            className="hidden lg:flex flex-col lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0"
          >
            {[
              "End of Season Sale",
              "Limited Edition",
              "Law 2024",
              "Unstitched",
              "Women",
              "Salt",
              "Men",
              "Jewelry",
              "Shoes",
              "Bags",
              "Kids",
              "Fragrances",
            ].map((item, index) => (
              <li
                key={index}
                className="list-none px-3 py-2 text-white font-serif hover:text-green-300"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
