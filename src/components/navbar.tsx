"use client";
import LanguageSelector from "./language-selector";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";
import ThemeSwitch from "./theme-switch";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 5) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeWhileScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeWhileScroll);
      }
    };
  }, []);
  const t = useTranslations("nav");
  return (
    <>
      <nav className="w-full  fixed  backdrop-blur-sm">
        <div
          className={`transition-all duration-700 
            flex  rounded-lg px-4 h-10 
      items-center justify-between  mx-auto  ${
        navScroll ? "mt-2 max-w-7xl " : "  max-w-6xl"
      }`}
        >
          <div className="uppercase font-bold">
            <h1>Maciel Pinheiro</h1>
          </div>
          <ul
            className="flex gap-5 items-center 
          justify-center font-semibold "
          >
            <li className="navHover">
              <Link href={"/"}>{t("home")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/skills"}>{t("skills")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/projects"}>{t("projects")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/about"}>{t("about")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/contact"}>{t("contact")}</Link>
            </li>
            <li className="flex items-center">
              <LanguageSelector />
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
