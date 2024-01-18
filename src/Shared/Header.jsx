import logo from "../assets/logo.png";
import home from "../assets/home.png";
import homeActive from "../assets/home-active.png";
import domain from "../assets/domain.png";
import domainActive from "../assets/domain-active.png";
import prompts from "../assets/propmts.png";
import promptsActive from "../assets/prompt-active.png";
import gif from "../assets/gif.png";
import gifActive from "../assets/gif-active.png";
import notification from "../assets/notification.png";
import globe from "../assets/global.png";
import arrow from "../assets/arrow-down.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [mood, setMood] = useState("light");
  const [lng, setLng] = useState("En");
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const navlinks = [
    {
      pic: home,
      active: homeActive,
      title: "Home",
      path: "/",
    },
    {
      pic: domain,
      active: domainActive,
      title: "Domain",
      path: "/domain",
    },
    {
      pic: prompts,
      active: promptsActive,
      title: "Prompts",
      path: "/prompts",
    },
    {
      pic: gif,
      active: gifActive,
      title: "GIF",
      path: "/gif",
    },
    {
      pic: notification,
      title: "Notification",
      path: "/notification",
    },
  ];
  return (
    <div className="px-8 py-[23px]">
      <div className="flex justify-between gap-5 items-center">
        <div className="flex items-center gap-[33px]">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex">
            {navlinks.map((data, index) => (
              <div
                key={index}
                className={`${
                  location.pathname === data.path && "active"
                } "  text-secondary  flex-shrink-0 w-[65px] flex flex-col justify-center items-center text-center "`}
              >
                <img
                  className="object-contain mb-[6px]"
                  src={location.pathname === data.path ? data.active : data.pic}
                  alt=""
                />
                <p className=" text-xs text-medium">{data.title}</p>
              </div>
            ))}
          </div>
          <button className="faq_btn">FAQ</button>
        </div>

        <div className="flex items-center gap-[18px]">
          <button className="bg-blue rounded-[50px] py-[13px] px-[26px] text-white text-sm font-medium">
            Ask Questions?
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="border border-[#EFF3F7] rounded-[50px] px-[9px] py-[10px] flex items-center gap-2 text-secondary text-sm font-normal "
            >
              <img src={globe} alt="" />
              {lng}
              <img src={arrow} alt="" />
            </button>
            {open && (
              <div className="shadow bg-white rounded-3 p-3 text-sm text-secondary text-center absolute w-full">
                <p
                  onClick={() => {
                    setLng("En");
                    setOpen(false);
                  }}
                  className="mb-2"
                >
                  En
                </p>
                <p
                  onClick={() => {
                    setLng("Ca");
                    setOpen(false);
                  }}
                >
                  Ca
                </p>
              </div>
            )}
          </div>
          <button className="bg-[#EFF3F7] p-[2px] rounded-[50px] flex items-center">
            <img
              onClick={() => setMood("light")}
              className={`${
                mood === "light" ? "bg-white" : "bg-transparent"
              }  rounded-full p-2`}
              src={sun}
              alt=""
            />
            <img
              onClick={() => setMood("dark")}
              className={`${
                mood === "dark" ? "bg-white" : "bg-transparent"
              }  rounded-full p-2`}
              src={moon}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;