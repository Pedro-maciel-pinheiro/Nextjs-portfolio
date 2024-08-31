"use client";
import Link from "next/link";
import React from "react";
import { IoIosWarning } from "react-icons/io";
export default function NotFound() {
  return (
    <html className="flex flex-col items-center justify-center gap-2 text-3xl text-black dark:text-white">
      <body className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <div className="mx-auto flex items-center justify-center h-auto w-[90%] flex-col rounded-xl bg-white md:h-[300px] md:w-[400px]">
          <h1 className="flex items-center"><IoIosWarning /> 404 <IoIosWarning /></h1>
          Something went wrong
          
          <Link href={"/en"} className="underline text-blue-500 uppercase">back to main page</Link>
        </div>
      </body>
    </html>
  );
}
