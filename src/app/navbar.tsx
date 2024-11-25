import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar flex justify-between">
      <div className="">
        <h1 className="text-3xl font-bold">Travela Time Quota</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 ">
          <li>
            <Link href="\elections\">Search</Link>
          </li>
          <li>
            <Link href="\concluded-elections\">Old searches</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
