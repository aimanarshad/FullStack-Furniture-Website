import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-auto py-4 px-6 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="leading-[41.45px]"
          />
          <h1 className="text-2xl font-bold leading-[41.45px]">Furniro</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-bold">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/person.png"
            alt="User"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/search.png"
            alt="Search"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/heart.png"
            alt="Favorites"
            width={30}
            height={30}
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="/cart.png"
            alt="Cart"
            width={40}
            height={40}
            className="cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4">
        <ul className="flex flex-col space-y-2 text-center text-lg font-bold">
          <li className="hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
