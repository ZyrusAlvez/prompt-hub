"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true)

  return (
    <nav className="flex m-4 sm:justify-between">
      <div className="flex">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="Prompt Hub Logo"
            className="object-contain"
          />
        </Link>
        <h1 className="hidden sm:flex ml-4 font-bold text-xl">Prompt Hub</h1>
      </div>

      {/* Conditional Rendering: user logged in or not */}
      {
        loggedIn ? (
          <div className="flex gap-4">
            <Link href="/">
              <div className="hidden sm:flex rounded-full text-white bg-black px-4 py-1">
                Create Post
              </div>
            </Link>
            <Link href="/">
              <div className="hidden sm:flex rounded-full text-gray-400 border-gray-400 border px-4 py-1">
                Sign Out
              </div>
            </Link>
          </div>
        ) : (
          <>
          </>
        )
      }

    </nav>
  );
};

export default Nav;
