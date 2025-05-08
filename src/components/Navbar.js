
import ThemeToggle from "@/hooks/ThemeToggles";
import {
  Home,
  User,
  LayoutGrid,
  Notebook,
  Image as ImageIcon,
  Sun,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#111827] px-4 mb-6 py-2 rounded-full flex items-center justify-between max-w-fit mx-auto mt-6 shadow-md border border-gray-700 ">
      <ul className="flex items-center sm:gap-4 gap-1 text-white">
      <Link href='/'><li className="flex items-center gap-1 px-3 py-2 hover:bg-gray-700 rounded-full cursor-pointer">
          <Home size={18} />
        </li>
        </Link>

        <Link href='/about'>
        <li className="flex items-center gap-1 px-3 py-2 hover:bg-gray-700 rounded-full cursor-pointer">
          <User size={18} />
          <span className="text-sm hidden md:inline">About</span>
        </li></Link>

       <Link href='/skills'>
       <li className="flex items-center gap-1 px-3 py-2 hover:bg-gray-700 rounded-full cursor-pointer">
          <LayoutGrid size={18} />
          <span className="text-sm hidden md:inline">Skills</span>
        </li>
       </Link>

       <Link href='/projects'> <li className="flex items-center gap-1 px-3 py-2 hover:bg-gray-700 rounded-full cursor-pointer">
          <Notebook size={18} />
          <span className="text-sm hidden md:inline">Projects</span>
        </li></Link>

        <Link href='/gallery'>
        <li className="flex items-center gap-1 px-3 py-2 hover:bg-gray-700 rounded-full cursor-pointer">
          <ImageIcon size={18} />
          <span className="text-sm hidden md:inline">Gallery</span>
        </li>
        </Link>

        <li className=" hover:bg-gray-700 rounded-full cursor-pointer border-l border-gray-600">
          {/* <Sun size={18} /> */}
          <ThemeToggle/>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

