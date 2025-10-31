import React from "react";
import logoSekolah from "../../assets/logo/smpalbanna.png";

import { Link } from "react-router-dom";

import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base text-black">
      <div className="flex flex-wrap gap-5 justify-evenly bg-base text-base-content p-5">
        <nav className="flex flex-wrap justify-center items-center gap-2">
          <img src={logoSekolah} alt="smpit-albanna-logo" className="w-32" />
          <p className="text-nowrap lg:text-wrap text-center">
            Generasi Emas <br />
            Pemimpin Kejayaan Islam
          </p>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Navigasi</h6>
          <a href="a" className="">
            Beranda
          </a>
          <a href="a" className="">
            Kegiatan
          </a>
          <a href="a" className="">
            Kontak
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Profil</h6>
          <a href="a" className="">
            Sejarah
          </a>
          <a href="a" className="">
            Visi Misi
          </a>
          <a href="a" className="">
            Kurikulum
          </a>
          <a href="a" className="">
            Guru
          </a>
        </nav>
      </div>

      <div className="pb-5 flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center text-slate-500">
        <div className="flex justify-start items-center gap-3 text-sm">
          <FaPhoneVolume />
          <p className="font-bold">(+62) 823-5033-3377</p>
        </div>
        <div className="flex justify-start items-center gap-3 text-sm">
          <FaMailBulk />
          <p className="font-bold">smpit.albanna@gmail.com</p>
        </div>
        <div className="flex justify-start items-center gap-3 text-sm">
          <FaLocationDot />
          <p className="font-bold">Candimas, Natar</p>
        </div>
      </div>
      <div className="flex flex-center justify-center gap-5 pb-5 text-slate-500">
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaInstagramSquare />
        </Link>
        <Link>
          <FaTiktok />
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="h-[2px] w-[80vw] bg-white"></div>
      </div>

      <div className="text-sm text-slate-500 text-center flex justify-center items-center py-5">
        smpitalbanna<span> . </span> All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
