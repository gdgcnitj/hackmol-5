import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="   what w-full bg-black shadow border-2 border-black sticky top-0 ">
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex items-center  md:block">
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                ></button>
              </div>
              <div
                className=" win flex items-center gap-2"
                onClick={() => setNavbar(!navbar)}
              >
                <div className=" ">
                  <h2 className="tell">ABOUT</h2>
                </div>
                <div onClick={() => setNavbar(!navbar)}>
                  <h2 className="  man text-lg md:text-2xl font-bold text-white">
                    Menu
                  </h2>
                  {navbar ? (
                    <svg
                      className=" sign"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 13.125L10 6.875L16.25 13.125"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="sign"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.25 6.875L10 13.125L3.75 6.875"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1  pb-4 mt-4 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul
                  className="
    
"
                >
                  <li className=" texx text-black hover:bg-white hover:text-black rounded-lg p-2t justify-content  gap-4px">
                    <Link
                      href={"#schedule"}
                      className="w-full flex justify-center items-center"
                    >
                      SCHEDULE
                    </Link>
                  </li>
                  <li className="texx2 text-black hover:bg-white hover:text-black rounded-lg p-2t ">
                    <Link
                      href={"#prizes"}
                      scroll={false}
                      className="w-full flex justify-center items-center"
                    >
                      PRIZES
                    </Link>
                  </li>
                  <li className="texx3 text-black hover:bg-white hover:text-black rounded-lg p-2t">
                    <Link
                      href={"#rules"}
                      scroll={false}
                      className="w-full flex justify-center items-center"
                    >
                      RULES
                    </Link>
                  </li>
                  <li className="texx4 text-black hover:bg-white hover:text-black rounded-lg p-2t">
                    <Link
                      href={"#hackthon tracks"}
                      scroll={false}
                      className="w-full flex justify-center items-center"
                    >
                      TRACKS
                    </Link>
                  </li>

                  <li className="texx5 text-black hover:bg-white hover:text-black rounded-lg p-2t">
                    <Link
                      href={"#judges"}
                      scroll={false}
                      className="w-full flex justify-center items-center"
                    >
                      JUDGES
                    </Link>
                  </li>
                  <li className="texx6 text-black hover:bg-white hover:text-black rounded-lg p-2t">
                    <Link
                      href={"#faq"}
                      scroll={false}
                      className="w-full flex justify-center items-center"
                    >
                      FAQS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {navbar && (
          <div className="md:hidden ">
            <div className="px-2 sm:px">
              <div className=" heaven flex flex-col justify-center items-center gap-4">
                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t">
                  <Link href="#about">
                    {" "}
                    <button onClick={() => console.log("connect")}>
                      About
                    </button>
                  </Link>
                </div>
                <div className=" hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t ">
                  <Link href="#schedule">
                    {" "}
                    <button onClick={() => console.log("connect")}>
                      Schedule
                    </button>
                  </Link>
                </div>

                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t">
                  <Link href="#prizes">
                    <button onClick={() => console.log("connect")}>
                      Prizes
                    </button>
                  </Link>
                </div>
                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t ">
                  <Link href={"#rules"} scroll={false}>
                    Rules
                  </Link>
                </div>
                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t">
                  <Link href={"#tracks"} scroll={false}>
                    Tracks
                  </Link>
                </div>

                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t">
                  <Link href={"#judges"} scroll={false}>
                    Judges
                  </Link>
                </div>
                <div className="hell text-black hover:bg-white px-2 hover:text-black rounded-lg p-2t">
                  <Link href={"#FAQ"} scroll={false}>
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <hr className="no" />

      <hr className="yes" />
    </>
  );
}
