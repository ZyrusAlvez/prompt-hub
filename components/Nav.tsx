import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <nav className="flex m-4">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="Prompt Hub Logo"
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
