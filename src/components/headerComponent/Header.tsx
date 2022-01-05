import { useEffect, useRef } from "react";

import { Outlet } from "react-router-dom";
import ShowMenuList from "../showMenuList/ShowMenuList";

import { IoMdArrowDropright } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiSearchAlt2, BiPhotoAlbum } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FaFemale } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  AiOutlineFileGif,
  AiFillCamera,
  AiFillVideoCamera,
} from "react-icons/ai";
import logo from "../../assets/images/logo.svg";

import "./index.css";
import SignupPage from "../../pages/signup/SignupPage";

const topTitle: Array<string> = [
  "premium",
  "modelhub",
  "sexual wellness",
  "insights",
  "sites",
  "shop",
  "trust & safety",
];
const language: Array<string> = [
  "Deustch",
  "Japanese",
  "French",
  "Italian",
  "Chinese",
];
type ToggelMenu = { icon: JSX.Element; title: string }[];
const style = { fontSize: "20px" };
const toggleMenu: ToggelMenu = [
  { icon: <AiFillVideoCamera style={style} />, title: "videos" },
  { icon: <BiPhotoAlbum style={style} />, title: "photos" },
  { icon: <IoIosPeople style={style} />, title: "members" },
  { icon: <FaFemale style={style} />, title: "pornstars" },
  { icon: <AiOutlineFileGif style={style} />, title: "gifs" },
  { icon: <AiFillCamera style={style} />, title: "camera" },
];

const catetories: Array<{ id: number; title: string }> = [
  { id: 1, title: "home" },
  { id: 2, title: "pornvideos" },
  { id: 3, title: "categories" },
  { id: 4, title: "livecams" },
  { id: 5, title: "pornstars" },
  { id: 6, title: "fucknow" },
  { id: 7, title: "community" },
  { id: 8, title: "photos&gifs" },
];

// Head component
const Header = (): JSX.Element => {
  const ulMenuRef = useRef<HTMLUListElement>(null);
  const ulCategoriesRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const signupPageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const btnEl = btnRef.current;

    btnEl!.addEventListener("click", showOrHideMenu);
    window.addEventListener("click", hideMenu);

    return (): void => {
      btnEl!.removeEventListener("click", showOrHideMenu);
      window.removeEventListener("click", hideMenu);
    };
  }, []);

  // show or hide the menu
  const showOrHideMenu = (): void => {
    ulMenuRef.current!.classList.toggle("show");
  };
  // hide the menu outside of the target area.
  const hideMenu = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (!target.matches(".upload")) {
      if (ulMenuRef.current) {
        ulMenuRef.current.classList.remove("show");
      }
    }
  };

  const handleClick = (): void => {
    const signupPage = document.querySelector(".sign-up-page") as HTMLElement;
    signupPage!.style.display = "block";
  };

  return (
    <>
      {/* this is top title */}
      <section className="title-wrapper">
        <div className="empty-placeholder"></div>
        <nav className="nav">
          <ul className="top">
            {topTitle.map((title: string, index: number): JSX.Element => {
              return <ShowMenuList key={index} title={title} anchor={true} />;
            })}
          </ul>
        </nav>
        <div className="dropdown-box">
          <span>
            EN
            <IoMdArrowDropright style={{ fontSize: "16px" }} />
          </span>
          <ul className="hide-show-menu">
            {language.map((title: string, index: number): JSX.Element => {
              return <li key={index}>{title}</li>;
            })}
          </ul>
        </div>
      </section>

      {/* this is logo, search bar */}
      <section className="header-wrapper">
        {/* the logo */}
        <div className="log-box">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* the search box */}
        <div className="search-box">
          {/* search input */}
          <input type="search" placeholder="Search videos" />
          <section>
            <div className="toggle-upload-video">
              {/* upload button */}
              <button ref={btnRef} className="upload">
                <BsFillCameraVideoFill style={{ fontSize: "20px" }} />
                <IoMdArrowDropright style={{ fontSize: "16px" }} />
              </button>
              {/* hide or show menu list */}
              <ul className="toggle-menu" ref={ulMenuRef}>
                <li>What are you looking for?</li>
                {toggleMenu.map(
                  (
                    item: { icon: JSX.Element; title: string },
                    index: number,
                  ): JSX.Element => {
                    const { icon, title } = item;
                    return (
                      <ShowMenuList key={index} title={title} icon={icon} />
                    );
                  },
                )}
              </ul>
            </div>
            {/* search button */}
            <button className="search">
              <BiSearchAlt2 style={{ fontSize: "20px" }} />
            </button>
          </section>
        </div>

        {/* upload and upgrade button */}
        <div className="header-btns-wrapper">
          <div>
            <RiVideoAddFill style={{ fontSize: "15px", marginRight: "4px" }} />
            <span>Upload</span>
          </div>
          <a href="/">Upgrade</a>
        </div>

        {/* login and signup button */}
        <div className="register">
          <button>Log in</button>
          <button onClick={handleClick}>Sign Up</button>
        </div>
      </section>

      {/* this is categories */}
      <section className="categories">
        <ul ref={ulCategoriesRef}>
          {catetories.map(
            (item: { id: number; title: string }): JSX.Element => {
              const { title, id } = item;
              return (
                <ShowMenuList
                  key={id}
                  title={title}
                  arrowIcon={
                    <MdOutlineArrowDropDown style={{ fontSize: "24px" }} />
                  }
                />
              );
            },
          )}
        </ul>
      </section>
      <Outlet />
      <section className="sign-up-page" ref={signupPageRef}>
        <SignupPage signupPageRef={signupPageRef} />
      </section>
    </>
  );
};
export default Header;
