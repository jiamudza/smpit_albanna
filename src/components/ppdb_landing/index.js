import React from "react";

// import paskibra from "../../assets/images/paskibra.jpg";
// import guru from "../../assets/images/guru.jpg";
// import mabar from "../../assets/images/mabar.jpg";
// import p5 from "../../assets/images/p5.jpg";
// import solat from "../../assets/images/solat.jpg";
import flyerPpdb from "../../assets/ppdb2025/flyerppdb.jfif";
import spmb from "../../assets/spmb2026/spmb.jpeg"

import { IoNewspaper } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
// import { Link } from "react-router-dom";

const PpdbLanding = () => {
  return (
    <div>
      <div className="px-5 md:px-7 lgpx-20 mt-10 flex justify-center items-center flex-wrap lg:flex-nowrap pb-10 gap-10">
        <div className="carousel mt-10 lg:mt-0 md:flex rounded-box h-60 lg:h-auto md:w-[70vw] lg:w-80 relative">
          <div className="carousel-item w-full">
            <img
              src={spmb}
              className="w-full object-cover"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
        <div>
          <h2 className="font-semibold">
            Kabar Gembira bagi semua calon peserta didik!
          </h2>
          <h1 className="text-2xl font-bold text-indigo-500">Resmi Dibuka</h1>

          <p>
            SPMB (Sistem Penerimaan Murid Baru){" "}
            <span className="font-semibold">
              SMP IT AL BANNA BOARDING SCHOOL
            </span>{" "}
            Tahun Ajaran 2026/2027!
          </p>
          <p className="mt-4">
            Jangan lewatkan kesempatan ini! Kami menawarkan tiga jalur
            pendaftaran yang menarik:
          </p>
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

          <p className="mt-4">
            Jadilah bagian dari keluarga besar{" "}
            <span className="font-semibold">
              SMP IT AL BANNA BOARDING SCHOOL
            </span>
          </p>
          <h3 className="text-lg font-bold text-indigo-400">
            Kami tunggu kehadiranmu!
          </h3>
          <div className="mt-5 flex justify-start">
            <a
              href="https://wa.me/+6282350333377"
              className="w-80 text-center bg-gradient-to-t from-indigo-400 to-blue-300 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200 py-2"
            >
              Informasi Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpdbLanding;
