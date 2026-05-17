import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8DFD3] bg-[#FAF7F2]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#6F4E37]">
            Quiet Brew
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-[#6F4E37] font-medium border-b-2 border-[#6F4E37] pb-1"
                  : "text-[#6B6B6B] hover:text-[#6F4E37] transition"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`${
                isActive("/menu")
                  ? "text-[#6F4E37] font-medium border-b-2 border-[#6F4E37] pb-1"
                  : "text-[#6B6B6B] hover:text-[#6F4E37] transition"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-[#6F4E37] font-medium border-b-2 border-[#6F4E37] pb-1"
                  : "text-[#6B6B6B] hover:text-[#6F4E37] transition"
              }`}
            >
              About
            </Link>
            <Link
              to="/reservation"
              className={`${
                isActive("/reservation")
                  ? "text-[#6F4E37] font-medium border-b-2 border-[#6F4E37] pb-1"
                  : "text-[#6B6B6B] hover:text-[#6F4E37] transition"
              }`}
            >
              Reservation
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-[#6F4E37] font-medium border-b-2 border-[#6F4E37] pb-1"
                  : "text-[#6B6B6B] hover:text-[#6F4E37] transition"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Reserve Button */}
            <button
              className="
                hidden sm:block
                bg-[#6F4E37]
                text-white
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition
                shadow-md
              "
            >
              Reserve Table
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#6F4E37]">
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}