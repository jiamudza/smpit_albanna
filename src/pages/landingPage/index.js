import React from "react";
import Header from "../../components/header";
// import jumbotron from "../../assets/images/latar-albanna.jpg";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import carouselbg from "../../assets/elements/purple2.svg";
// import carouselbg6 from "../../assets/elements/purple6.svg";
import carouselbg2 from "../../assets/elements/purple1.svg";
import carouselbg3 from "../../assets/elements/purple3.svg";
import carouselbg4 from "../../assets/elements/purple4.svg";
import carouselbg5 from "../../assets/elements/purple5.svg";
import tahfidz from "../../assets/images/tahfidz.png";
import tahsin from "../../assets/images/tahsin.png";
import bpi from "../../assets/images/bpi.png";
import arab from "../../assets/images/arabia.png";
import stat from "../../assets/images/stat.png";
import paskibra from "../../assets/images/paskibra.jpg";
import guru from "../../assets/images/guru.jpg";
import mabar from "../../assets/images/mabar.jpg";
import p5 from "../../assets/images/p5.jpg";
import solat from "../../assets/images/solat.jpg";

import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import Faqs4 from "../../components/faq";
import TestimonialCarousel from "../../components/review-carousel";
import Logo from "../../components/logos";
import PpdbLanding from "../../components/ppdb_landing";
import Mapp from "../../components/mapp";
import videoProfile from "../../assets/file/video-profile/profil-smpit-albanna.mp4"
import smpalbanna from "../../assets/logo/smpalbanna.png"

function LandingPage() {
  // const navigate = useNavigate();

  return (
    <div className="bg-base relative text-black">
      <header className="sticky top-0 z-30">
        <Header />
      </header>
      <main className="w-full pb-20 bg-white flex justify-center flex-wrap items-center gap-10 px-10 pt-20 relative">
        <div className="relative z-20 text-black">
          {/* <Logo /> */}
          <p className="font-bold">SMPIT Al Banna</p>
          <h2 className="text-5xl font-bold">
            Generasi Emas,
            <br />
            Pemimpin Kejayaan <br />
            <span className="text-emerald-300 text-center">Islam</span>
          </h2>
          <p className="text-left">
            Kami adalah sekolah islam terpadu yang bertujuan mencetak generasi
            <br />
            Qur'ani yang perduli terhadap agama, keluarga, nusa dan bangsa.
          </p>

          <div className="mt-5 flex justify-start items-center gap-10">
            <Link 
            to="https://docs.google.com/forms/d/1UzRNeDQHZtOB5qWcgELYEK_8fmMjeJgax3u-SLChhXo/viewform?edit_requested=true"
            className="bg-gradient-to-t from-indigo-400 to-blue-300 px-4 py-2 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200">
              Daftar!
            </Link>
            <p className="text-sm">
              <span className="text-3xl font-bold">25</span>
              <span className="text-xs font-bold">+</span>
              <br />
              Guru
            </p>

            <p className="text-sm">
              <span className="text-3xl font-bold">300</span>
              <span className="text-xs font-bold">+</span>
              <br />
              Siswa
            </p>
          </div>
        </div>

        <img
          src={carouselbg}
          alt="bg1"
          className="absolute left-0 top-0 w-1/2"
        />
        <img
          src={carouselbg2}
          alt="bg2"
          className="absolute right-20 top-0 w-40"
        />
        <img
          src={carouselbg3}
          alt="bg3"
          className="absolute right-0 top-10 w-1/2"
        />
        <img
          src={carouselbg4}
          alt="bg4"
          className="absolute right-80 bottom-10 w-32"
        />
        <img
          src={carouselbg5}
          alt="bg5"
          className="absolute top-0 right-96 w-80"
        />

        <div className="relative">
          <div className="bg-white px-2 py-1 rounded-md drop-shadow-lg shadow-2xl absolute top-10 flex justify-center md:top-20 md:-right-20 z-20 hover:opacity-20 ease-in-out duration-300 cursor-pointer">
            <IoPersonCircleSharp size={24} color="purple" />
            <p>1.278 Alumni</p>
          </div>

          <div className="bg-white px-2 py-1 rounded-md drop-shadow-lg shadow-2xl absolute gap-3 flex justify-center items-center bottom-5 right-0 md:right-auto md:-left-20 lg:-left-40 z-20 hover:opacity-20 ease-in-out duration-300 cursor-pointer">
            <img src={stat} alt="statistic" className="w-10 lg:w-20" />
            <p>
              100% Lulus
              <br /> dengan nilai memuaskan
            </p>
          </div>
          <div className="carousel mt-10 lg:mt-0 md:flex rounded-box h-60 lg:h-auto md:w-[70vw] lg:w-80 relative">
            <div className="carousel-item w-full">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOblXCcIiVRB79DrK5xIto1ZYylhiaQqVBX6nQk=s1360-w1360-h1020"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={paskibra}
                className="w-full object-cover"
                alt="Paskibra"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOZ5PgrKpIsvQBRizOacm_diMV5Bfzp5fm4KUvD=s680-w680-h510"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={guru}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={mabar}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={p5}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={solat}
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </main>

      <Logo />
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Event Observasi Sedang Berlangsung</h2>
        <div className="mt-5 hover:scale-110 ease-in-out duration-200 relative">
              <Link
                to="/login"
                className="absolute centering bg-gradient-to-t from-indigo-400 to-blue-300 px-4 font-semibold text-white rounded-xl shadow-2xl shadow-indigo-400 drop-shadow-lg py-2 mt-10"
              >
                Login
              </Link>
            </div>
      </div>

      {/* Program Unggulan */}

      <div className="px-5 lg:px-10 pt-20 flex justify-center flex-wrap gap-7 bg-base items-center">
        <div className="card bg-base text-primary-content w-80">
          <div className="card-body">
            <div className="flex ">
              <WiStars color="yellow" size={20} />
              <p className="text-slate-500 text-sm">Program pembelajaran</p>
            </div>
            <h2 className="font-bold text-2xl text-primary">
              Program Unggulan!
            </h2>
            <p className="text-slate-500">
              Beberapa program unggulan yang ada di SMPIT Al Banna
            </p>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-28 lg:w-40 shadow-xl">
          <figure>
            <img src={tahfidz} alt="Shoes" />
          </figure>
          <div className="card-body h-12 bg-white rounded-b-2xl">
            <h2 className="text-primary text-center text-xs text-nowrap h-5 lg:text-md font-bold">
              Tahfidz Qur'an
            </h2>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-28 lg:w-40 shadow-xl">
          <figure>
            <img src={tahsin} alt="Shoes" />
          </figure>
          <div className="card-body h-12 bg-white rounded-b-2xl">
            <h2 className="text-primary text-center text-nowrap text-xs h-5 lg:text-md font-bold">
              Tahsin Qur'an
            </h2>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-28 lg:w-40  shadow-xl">
          <figure>
            <img src={bpi} alt="Shoes" />
          </figure>
          <div className="card-body h-12 bg-white rounded-b-2xl">
            <h2 className="text-primary relative text-center text-xs lg:text-md font-bold text">
              Bina Pribadi Islam
            </h2>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-28 lg:w-40 shadow-xl">
          <figure>
            <img src={arab} alt="Shoes" />
          </figure>
          <div className="card-body h-12 bg-white rounded-b-2xl">
            <h2 className="text-primary align-text-top text-center text-xs lg:text-md font-bold">Bahasa Arab</h2>
          </div>
        </div>
      </div>

      {/* white line */}
      <div className="flex justify-center mt-10">
        <div className="h-1 w-[80vw] bg-white"></div>
      </div>

      {/* Desc */}
      <div className=" bg-base mx-auto text-primary flex justify-center items-center flex-wrap px-5 md:px-20 py-5 gap-4 pt-10">
        <video className="rounded-lg w-full lg:w-1/2" controls>
          <source
            src={videoProfile}
            type="video/mp4"
            poster={smpalbanna}
          />
          Your browser does not support the video tag.
        </video>
        <div className="w-1 h-auto bg-white"></div>
        <div className="text-wrap">
          <p className="font-semibold text-lg ">SMPIT</p>
          <p className="font-bold text-2xl">AL BANNA</p>
          <p className="text-black">
            Kami adalah sekolah islam terpadu yang bertujuan mencetak generasi
            Qur'ani yang perduli terhadap agama, keluarga, nusa dan bangsa. SMP
            IT Al Banna Berfokus pada perbaikan akhlakul karimah bagi anak
            didik, menerapkan nilai-nilai islami...
          </p>
          <div className="mt-5 relative mb-10">
            <Link
              to="/about-school"
              className="absolute bg-gradient-to-t from-indigo-400 to-blue-300 px-4 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200 py-2"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="h-1 w-[80vw] bg-white"></div>
      </div>

      {/* ppdb */}
      <div>
        <PpdbLanding />
      </div>

      <div className="mt-5 bg-white flex justify-center items-center flex-wrap gap-5 pt-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center">
          Sudah siap sekolah?
        </h2>
        <Link
        to="https://docs.google.com/forms/d/1UzRNeDQHZtOB5qWcgELYEK_8fmMjeJgax3u-SLChhXo/viewform?edit_requested=true"
        className="bg-gradient-to-t from-indigo-400 to-blue-300 px-4 font-semibold text-white rounded-3xl shadow-2xl shadow-indigo-400 drop-shadow-lg hover:scale-110 ease-in-out duration-200 py-2">
          Daftar!
        </Link>
      </div>

      {/* Mapp */}
      <div id="contact" className="bg-white pt-20 pb-10">
        <div className="flex justify-center gap-3 flex-wrap">
          <div className="card bg-violet-400 text-white shadow-xl w-80 hover:relative hover:z-10 hover:scale-110 ease-in-out duration-200 cursor-default">
            <div className="card-body">
              <h2 className="card-title ">
                <FaPhoneVolume />
                <p>Whatsapp</p>
              </h2>
              <p className="font-bold">(+62) 823-5033-3377</p>
              <p>Hubungi nomor ini untuk informasi lebih lanjut</p>
            </div>
          </div>
          <div className="card bg-base text-primary shadow-xl w-80 hover:relative hover:z-10 hover:scale-110 ease-in-out duration-200 cursor-default">
            <div className="card-body">
              <h2 className="flex justify-center items-center gap-2">
                <FaMailBulk />
                <p className="card-title">Email</p>
              </h2>
              <p className="font-bold">smpit.albanna@gmail.com</p>
              <p>Silahkan hubungi kami di alamat email ini</p>
            </div>
          </div>


          <div className="card bg-white shadow-xl text-primary w-80 hover:relative hover:z-10 hover:scale-110 ease-in-out duration-200 cursor-default">
            <div className="card-body">
              <h2 className="card-title ">
                <FaLocationDot />
                <p>Alamat</p>
              </h2>
              <p>
                <span className="font-bold">Jl. Raya Candi Mas</span> · Candi Mas · Kec. Natar · Kab. Lampung
                Selatan · Lampung. 35362
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-10">
        <Mapp />
      </div>

      <div className="px-5 lg:px-20 w-full bg-base py-20">
        <TestimonialCarousel />
      </div>

      <div>
        <Faqs4 />
      </div>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default LandingPage;
