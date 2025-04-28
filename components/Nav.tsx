"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProviders, ClientSafeProvider } from "next-auth/react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);

  useEffect(() => {
    getProviders()
      .then((response) => {
        setProviders(response)
        console.log(response)
      })

  }, []);

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

      {loggedIn ? (
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
          {/* You could loop providers here */}
        </>
      )}
    </nav>
  );
};

export default Nav;