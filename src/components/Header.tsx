import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants/navLinks";
import { projectData } from "../constants/projectData";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const RefOne = useRef(null);

  const handleMobileNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      RefOne.current &&
      !(RefOne.current as HTMLElement).contains(e.target as Node)
    ) {
      setMobileNav(false);
    }
  };

  return (
    <header
      id="header"
      className=" w-full py-4  width:100%;
      bg-primary h-[35rem]"
    >
      <nav className="flex fixed top-2 left-1/2 z-50 transform -translate-x-1/2  justify-between items-center  w-[96%]   rounded-full bg-white mt-2  p-4">
        <div className="pl-2 animate__animated animate__fadeIn">
          <img src="./Logo3.png" alt="logo" className="w-32 h-4 " />
        </div>

        <div
          ref={RefOne}
          className={` justify-start  absolute md:static flex md:flex-row flex-col duration-500  gap-[2vw]   min-h-[19rem] md:min-h-fit mx-auto md:mx-4   w-[96%]  md:w-auto   rounded-lg px-10 md:px-0 md:justify-center animate__animated animate__fadeIn bg-white top-[3.6rem] ${
            mobileNav ? "left-[0.4rem]" : " left-[-50rem] "
          }`}
        >
          {navLinks.map((item, i) => {
            return (
              <ul
                key={i}
                className="py-2 pl-2 md:mt-0 hover:bg-slate-100 md:hover:bg-white"
              >
                <Link
                  activeClass="active-link"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={item.ofset}
                  duration={500}
                  // @ts-expect-error: Temporary workaround for onClick type mismatch
                  onClick={handleMobileNav}
                >
                  <li className="text-base transition-all ease-in-out delay-100 cursor-pointer hover:text-primary lg:hover:scale-105 active:scale-95">
                    {item.section}
                  </li>
                </Link>
              </ul>
            );
          })}
        </div>
        <button className="mr-4 md:hidden" onClick={handleMobileNav}>
          {mobileNav ? (
            <FontAwesomeIcon
              icon={faX}
              size="lg"
              style={{ color: "#ff5722" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              style={{ color: "#ff5722" }}
            />
          )}
        </button>
      </nav>

      <div className="text-center mt-44 animate__animated animate__backInLeft">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-5xl lg:text-6xl">
            Your Reliable Construction Partner.
          </h1>
          <h3 className="mt-6 text-sm text-white sm:text-base">
            Maharastra Ltd - A Construction Company
          </h3>
          <p className="p-4 text-xs text-white sm:text-sm">
            We offer the best construction services in Maharashtra. With a wide
            range of projects, we have the experience to deliver quality and
            satisfaction.
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="px-6 py-3 text-sm transition-all ease-in-out rounded-full bg-btn_color text-text_light active:bg-btn_color hover:bg-onHover cursor: pointer hover:scale-105 lg:text-base active:">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="sticky flex flex-col items-center justify-between w-full p-6 mx-auto mt-20 space-y-4 text-white shadow-xl md:rounded-full bg-btn_color md:flex-row md:space-y-0 md:space-x-4 md:w-4/5">
        {projectData.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center animate__flipInX animate__animated md:items-start"
            >
              <h2 className="text-2xl font-semibold">{item.recored}</h2>
              <p className="text-sm">{item.data}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
