import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

import brand from "../../assets/logo/smpalbanna.png";
// import userPlaceholder from "../../assets/images/user-placeholder.png";

// import { FaCoffee } from "react-icons/fa";
// import {
//   // RiLogoutCircleLine,
//   // RiSettings3Fill,
//   RiHistoryFill,
// } from "react-icons/ri";
// import { IoMdCart } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
// import axios from "axios";

const Header = () => {
  // const [notif, setNotif] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburger-menu");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(`${window.location.pathname}`);

  const handleNav = (e) => {
    setActive(window.location.pathname);
  };

  const navigate = useNavigate();

  const [profileActive, setProfileActive] = useState(false);
  const [informationaActive, setInformationActive] = useState(false);
  const [activityActiv, setActivityActive] = useState(false);
  const handleProfile = () => {
    setProfileActive(true);
  };
  const handleProfileOut = () => {
    setProfileActive(false);
  };

  const handleInformation = () => {
    setInformationActive(true);
  };
  const handleInformationOut = () => {
    setInformationActive(false);
  };
  const handleActivity = () => {
    setActivityActive(true);
  };
  const handleActivityOut = () => {
    setActivityActive(false);
  };

  return (
    <div className="font-rubik bg-white pb-5 bg-opacity-90 relative">
      <Link
        to="/"
        className="lg:flex items-center font-bold w-20 absolute top-0 left-10 rounded-lg"
      >
        <img src={brand} className="rounded-lg" alt="logo-brand" />
      </Link>
      <div
        className={
          drawerOpen
            ? "flex blur-sm md:blur-none pt-5 px-5 md:px-20 items-center justify-end"
            : "flex  pt-5 px-5 md:px-20 items-center justify-end"
        }
      >
        <button
          id={hamburgerMenu}
          onClick={() => {
            setHamburgerMenu("hamburger-menu-active");
            setDrawerOpen(true);
          }}
          className="block lg:hidden"
        >
          <span className="hamburger-line origin-bottom-left transition ease-in-out duration-300"></span>
          <span className="h-[2.5px] w-5 rounded-lg bg-text block"></span>
          <span className="hamburger-line origin-top-left transition ease-in-out duration-300"></span>
        </button>

        <div className="hidden lg:block md:mx-20 whitespace-nowrap">
          <Link
            to="/"
            onClick={handleNav}
            className={
              active === "/"
                ? "font-bold text-primary lg:px-5"
                : "text-text md:px-5"
            }
          >
            Beranda
          </Link>
          <Link
            // onClick={handleNav}
            onMouseOver={handleProfile}
            onMouseOut={handleProfileOut}
            className={
              active === "/history" ||
              active === "/visi-misi" ||
              active === "/about-school" ||
              active === "/kurikulum" ||
              active === "/teacher"
                ? "font-bold text-primary lg:px-5 relative"
                : "text-text md:px-5 relative"
            }
          >
            Profil
            <div
              className={
                profileActive
                  ? "absolute flex gap-3 flex-col top-5 px-5 py-4 rounded-lg left-5 font-bold bg-white shadow-2xl drop-shadow-xl text-slate-600 cursor-default ease-in-out duration-300"
                  : "hidden"
              }
            >
              <Link
                to="/about-school"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Tentang Sekolah
              </Link>
              <Link
                to="/history"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Sejarah
              </Link>
              <Link
                to="/visi-misi"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Visi Misi
              </Link>
              <Link
                to="/kurikulum"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Kurikulum
              </Link>
              <Link
                to="/teacher"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Profil Guru
              </Link>
            </div>
          </Link>
          <Link
            to="/activity"
            onMouseOver={handleActivity}
            onMouseOut={handleActivityOut}
            className={
              active === "/activity"
                ? "font-bold text-primary lg:px-5 relative"
                : "text-text md:px-5 relative"
            }
          >
            Kegiatan
            <div
              className={
                activityActiv
                  ? "absolute flex gap-3 flex-col top-5 px-5 py-4 rounded-lg left-5 font-bold bg-white shadow-2xl drop-shadow-xl text-slate-600 cursor-default ease-in-out duration-300"
                  : "hidden"
              }
            >
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Upacara
              </Link>
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Pramuka
              </Link>
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Paskibra
              </Link>
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Belajar Mengajar
              </Link>
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Ekstrakurikuler
              </Link>
              <Link
                to="*"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Ujian
              </Link>
            </div>
          </Link>
          <Link
            to="/information"
            onClick={handleNav}
            onMouseOver={handleInformation}
            onMouseOut={handleInformationOut}
            className={
              active === "/informasi-ppdb" ||
              active === "/pengumuman" ||
              active === "/berita-terbaru"
                ? "font-bold text-primary lg:px-5 relative"
                : "text-text md:px-5 relative"
            }
          >
            Informasi
            <div
              className={
                informationaActive
                  ? "absolute flex gap-3 flex-col top-5 px-5 py-4 rounded-lg left-5 font-bold bg-white shadow-2xl drop-shadow-xl text-slate-600 cursor-default ease-in-out duration-300"
                  : "hidden"
              }
            >
              <Link
                to="/berita-terbaru"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Berita Terbaru
              </Link>
              <Link
                to="/informasi-ppdb"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Penerimaan Siswa Baru
              </Link>
              <Link
                to="/pengumuman"
                className="hover:scale-110 ease-in-out duration-100"
              >
                Pengumuman
              </Link>
            </div>
          </Link>
        </div>
      </div>

      <div
        id={`drawer-${drawerOpen}`}
        className="blur-none absolute transition-all ease-in-out duration-500 top-0 w-[80vw] h-[100vh] scroll-auto bg-white shadow-2xl lg:hidden"
      >
        <div className="flex flex-col items-start right-20 bg-transparent py-0 w-full text-center text-text">
          <div className="bg-base w-full h-16 rounded-r-xl">
            <div
              onClick={() => {
                setDrawerOpen(!drawerOpen);
                setHamburgerMenu("hamburger-menu");
              }}
              className="flex justify-end rounded pr-5 pt-4 cursor-pointer"
            >
              <HiOutlineArrowLeft size={30} className="text-slate-600" />
            </div>
            <div
              onClick={() => navigate("/profile")}
              className="cursor-pointer flex flex-col items-center mx-20 py-5 text-white"
            ></div>
          </div>

          {/* drawer down */}
          <div
            onClick={() => navigate("/")}
            className="py-5 px-20 flex items-center justify-arounf cursor-pointer border-b"
          >
            <AiFillHome size={25} className="text-text mx-3 " />
            <p>Beranda</p>
          </div>
          <div className="py-5 px-20 flex items-center justify-around cursor-pointer border-b">
            <FaSchool size={25} className="text-text mx-3" />
            <p>Profil</p>
          </div>
          <div className="pl-2 flex justify-end gap-3 flex-col text-left">
            <Link
              to="/about-school"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Tentang Sekolah
            </Link>
            <Link
              to="/history"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Sejarah
            </Link>
            <Link
              to="/visi-misi"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Visi Misi
            </Link>
            <Link
              to="/kurikulum"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Kurikulum
            </Link>
            <Link
              to="/teacher"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Profil Guru
            </Link>
          </div>
          <div
            onClick={() => navigate("/activity")}
            className="py-5 px-20 flex items-center justify-around cursor-pointer border-b"
          >
            <CiClock1 size={25} className="text-text mx-3" />
            <p>Kegiatan</p>
          </div>
          <div className="py-5 px-20 flex items-center justify-around cursor-pointer">
            <IoIosPaper size={25} className="text-text mx-3" />
            <p>Informasi</p>
          </div>

          <div className="flex flex-col justify-start gap-3 text-left">
            <Link
              to="/berita-terbaru"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Berita Terbaru
            </Link>
            <Link
              to="/informasi-ppdb"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Penerimaan Siswa Baru
            </Link>
            <Link
              to="/pengumuman"
              className="hover:scale-110 ease-in-out duration-100"
            >
              Pengumuman
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
