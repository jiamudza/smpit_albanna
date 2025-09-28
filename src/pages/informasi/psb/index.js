import React, { useState } from "react";
import Header from "../../../components/header/index";
import Footer from "../../../components/footer";

import brosur from "../../../assets/ppdb2025/brosurppdb.webp";
import BrosurPPDB2025 from "../../../assets/file/ppdb2025-2026/Brosurppdb2025.pdf";
import banner from "../../../assets/ppdb2025/bannerppdb.jpeg";
import { Link } from "react-router-dom";

import { RiGraduationCapFill } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";

import { MdDownload } from "react-icons/md";
const Psb = () => {
  const [informasi, setInformasi] = useState(false);

  const handleInformasi = () => {
    setInformasi(true);
  };

  const handleInfromasiOut = () => {
    setInformasi(false);
  };

  return (
    <div className="bg-white text-black">
      <header className="sticky top-0 z-40">
        <Header />
      </header>
      <main className="px-5 lg:px-20 mt-10 pt-10 mb-10">
        <nav className="flex justify-start gap-1 items-center">
          <div
            onClick={handleInfromasiOut}
            className={
              (informasi
                ? " bg-white border-base"
                : " border-indigo-400  bg-base font-bold") +
              " px-5 py-2 cursor-pointer border-t-4 rounded-t-lg"
            }
          >
            <p id="1">Infromasi PPDB</p>
          </div>
          <div
            onClick={handleInformasi}
            className={
              (!informasi
                ? " bg-white border-base"
                : " border-indigo-400  bg-base font-bold") +
              " px-5 py-2 cursor-pointer border-t-4 rounded-t-lg"
            }
          >
            <p>Pengumuman PPDB</p>
          </div>
        </nav>

        <div className="bg-base px-5 lg:px-10 py-10 md:rounded-tr-lg rounded-b-lg ">
          {/* content 1 */}
          <div className={informasi ? "hidden" : "block"}>
            <h3 className="font-bold text-2xl">
              Informasi Tentang Penerimaan Peserta Didik Baru (PPDB)
            </h3>
            <p className="mt-2 font-bold mb-2">
              Brosur PPDB SMPIT Al Banna TA.2025/2026
            </p>
            <img src={brosur} alt="brosur-smpit-albanna-ppdb" />

            <div className="flex justify-center md:justify-end">
              <a
                href={BrosurPPDB2025}
                download="brosur-ppdb-smpit-albanna"
                target="blank"
                className="flex justify-center w-64 text-center bg-teal-400 text-white rounded-sm hover:scale-105 ease-in-out duration-200 items-center gap-2 mt-2 py-2  cursor-pointer"
              >
                <p>Download Brosur</p>
                <MdDownload size={20} />
              </a>
            </div>
            <div className="mt-7 flex justify-center">
              <Link
                to="https://docs.google.com/forms/d/1UzRNeDQHZtOB5qWcgELYEK_8fmMjeJgax3u-SLChhXo/viewform?edit_requested=true"
                className="w-80 text-center text-md lg:text-xl bg-gradient-to-t from-indigo-400 to-blue-300 px-4 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200 py-4"
              >
                Klik Disini Untuk Mendaftar!
              </Link>
            </div>
          </div>
          {/* content 2 */}
          <div className={!informasi ? "hidden" : "block"}>
            <img src={banner} alt="banner-ppdb-smpit-albanna" className="rounded-lg"/>
            <div className="flex justify-center md:justify-end">
              <a
                href={banner}
                download="Banner-ppdb-smpit-albanna"
                target="blank"
                className="flex justify-center w-64 text-center bg-teal-400 text-white rounded-sm hover:scale-105 ease-in-out duration-200 items-center gap-2 mt-2 py-2  cursor-pointer"
              >
                <p>Download Banner</p>
                <MdDownload size={20} />
              </a>
            </div>
            <h3 className="font-bold text-xl mt-5">Informasi Penerimaan Peserta Didik Baru (PPDB) TA.2025/2026</h3>

            <h2 className="font-semibold">Kabar Gembira bagi semua calon peserta didik!</h2>
            <h1 className="text-2xl font-bold text-indigo-500">Resmi Dibuka</h1>

            <p>PPDB (Penerimaan Peserta didik Baru) <span className="font-semibold">SMPIT AL BANNA BOARDING SCHOOL</span> Tahun Ajaran 2025/2026!</p>
            <p className="mt-4">Jangan lewatkan kesempatan ini! Kami menawarkan tiga jalur pendaftaran yang menarik:</p>
            <ul>
                <li className="flex justify-start items-center gap-3">
                    <IoNewspaper />
                    Reguler
                </li>
                <li className="flex justify-start items-center gap-3">
                    <RiGraduationCapFill />
                    Prestasi (Bebas Biaya Bangunan)
                </li>
                <li className="flex justify-start items-center gap-3">
                    <MdApartment />
                Boarding (Bebas Biaya SPP)
                </li>
            </ul>

            <p className="mt-4">Jadilah bagian dari keluarga besar <span className="font-semibold">SMPIT AL BANNA BOARDING SCHOOL</span></p>
            <h3 className="text-lg font-bold text-indigo-400">Kami tunggu kehadiranmu!</h3>

            <p className="mt-4">Ttd.</p>
            <p>Panitia PPDB 2025/2026</p>


            <div className="mt-7 flex justify-center">
              <Link
                to="https://docs.google.com/forms/d/1UzRNeDQHZtOB5qWcgELYEK_8fmMjeJgax3u-SLChhXo/viewform?edit_requested=true"
                className="w-80 text-center text-md lg:text-xl bg-gradient-to-t from-indigo-400 to-blue-300 px-4 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200 py-4"
              >
                Klik Disini Untuk Mendaftar!
              </Link>
            </div>
        </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Psb;
