import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar hidden md:block bg-primary-color">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="logo">
          <Image src="next.svg" width={50} height={50} alt="Kaffeella" />
        </Link>
        <div className="menu">
          <ul className="flex space-x-8 font-semibold text-lg px-4 py-2">
            <li className="duration-200 ease-linear transition-colors hover:animate-wiggle">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
