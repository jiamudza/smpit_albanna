import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pengumuman = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setMessage("Tidak ada user ID di localStorage.");
      window.location.href = "/login";
      return;
    }
    // const handleLogout = () => {
    //     localStorage.removeItem('userId');
    //     window.location.href = '/';
    //   };

    axios
      .get(`https://cbt-smpit.vercel.app/siswa/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          setMessage(err.response.data.error || "Gagal memuat data user.");
        } else {
          setMessage("Terjadi kesalahan saat mengambil data.");
        }
      });
  }, []);

const handleBack = () => {
    window.location.href = "/user-validation";
};

// const handleraport = () => {
//     window.location.href = user.link_raport;
// }

const handleContact = () => {
    window.location.href = "https://wa.me/6282350333377";
};
return (
    <div
        className="min-h-screen flex items-center justify-center px-4 sm:py-3"
        style={{
            background: user
                ? user.id_kode === "1a"
                    ? "linear-gradient(to bottom, #87CEEB, #00BFFF)" // Sky blue
                    : user.id_kode === "2a"
                    ? "linear-gradient(to bottom, #4682B4, #5F9EA0)" // Sea blue
                    : user.id_kode === "2b"
                    ? "linear-gradient(to bottom, #FFD700, #FFA500)" // Yellow
                    : user.id_kode === "2c"
                    ? "linear-gradient(to bottom, #D8BFD8, #DDA0DD)" // Light purple
                    : user.id_kode === "2d"
                    ? "linear-gradient(to bottom, #800080, #4B0082)" // Dark purple
                    : user.id_kode === "3a"
                    ? "linear-gradient(to bottom, #359c19, #29940c)" // Light green
                    : "linear-gradient(to bottom, #ffffff, #f0f0f0)" // Default
                : "linear-gradient(to bottom, #ffffff, #f0f0f0)",
        }}
    >
        <main className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-lg w-full text-center">
            <h1
                className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ${
                    user
                        ? user.status_penerimaan
                            ? "text-blue-600"
                            : "text-purple-600"
                        : "text-blue-600"
                }`}
            >
                PENGUMUMAN PPDB
                <p className="text-purple-500 text-lg font-bold">SMPIT AL BANNA NATAR</p>
            </h1>
            {user ? (
                <>
                    <p className="text-sm text-base text-gray-600 mb-4 sm:mb-6">
                        Nama:{" "}
                        <strong className="text-blue-500">{user.nama_lengkap}</strong>
                    </p>
                    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                        {user.id_kode === "1a" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Alhamdulillah, ananda{" "}
                                    <strong className="text-green-600">DITERIMA</strong> melalui jalur{" "}
                                    <strong className="text-blue-500">Reguler</strong>.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Semoga Allah SWT senantiasa memberikan keberkahan.
                                </p>
                            </>
                        )}
                        {user.id_kode === "2a" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Alhamdulillah, ananda dinyatakan{" "}
                                    <strong className="text-green-600">LULUS</strong> seleksi jalur{" "}
                                    <strong className="text-blue-500">Prestasi</strong>.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Semoga Allah SWT memberikan kemudahan ananda kedepannya.
                                </p>
                            </>
                        )}
                        {user.id_kode === "2b" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Mohon maaf, ananda{" "}
                                    <strong className="text-yellow-600">BELUM LULUS</strong> seleksi jalur{" "}
                                    <strong className="text-blue-500">Prestasi</strong>. Namun, jangan
                                    berkecil hati!
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Ananda masih dapat belajar di SMPIT Al Banna melalui jalur{" "}
                                    <strong className="text-blue-500">Reguler</strong>. Kami percaya pada
                                    potensi ananda. Tetap semangat dan tawakal kepada Allah SWT.
                                </p>
                            </>
                        )}
                        {user.id_kode === "2c" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Alhamdulillah, ananda{" "}
                                    <strong className="text-green-600">LULUS</strong> jalur{" "}
                                    <strong className="text-blue-500">Tahfidz</strong>.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Namun, untuk melanjutkan proses, ananda perlu melengkapi{" "}
                                    <strong className="text-blue-500">BUKTI SERTIFIKAT</strong>. Kami yakin ananda
                                    dapat melengkapinya. Semoga Allah SWT memudahkan langkah
                                    ananda.
                                </p>
                            </>
                        )}
                        {user.id_kode === "2d" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Mohon maaf, ananda{" "}
                                    <strong className="text-yellow-600">BELUM LULUS</strong> seleksi jalur{" "}
                                    <strong className="text-blue-500">Tahfidz</strong>. Dikarenakan ada hal yang belum tuntas.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Ananda dapat melakukan <strong className="text-blue-500">TES ULANG</strong> dengan jadwal menyusul, dan ananda diminta melengkapi{" "}
                                    <strong className="text-blue-500">BUKTI SERTIFIKAT</strong>. Kami mendukung
                                    usaha ananda. Tetaplah berdoa dan berusaha, Semoga Allah SWT mudahkan.
                                </p>
                            </>
                        )}
                        {user.id_kode === "3a" && (
                            <>
                                <p className="text-sm sm:text-lg text-gray-700">
                                    Alhamdulillah, ananda{" "}
                                    <strong className="text-green-600">DITERIMA</strong> melalui jalur{" "}
                                    <strong className="text-blue-500">Boarding</strong>.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    Kami sangat antusias menyambut ananda di lingkungan sekolah kami. Semoga Allah SWT memberikan keberkahan dalam
                                    perjalanan ananda.
                                </p>

                                
                            </>
                        )}
                    </div>
                    <Link
                        to={user.link_raport}
                        target="_blank"
                        className="w-full inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300"
                    >
                       Lihat Rincian Rapor
                    </Link>
                    <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg mt-4">
                        <p className="text-xs sm:text-sm text-left text-gray-700">
                            <p className="text-left"><i><strong className="">Catatan: </strong></i></p>
                            Diharapkan ananda dan Wali murid dapat hadir pada <strong>Senin, 7 Juli 2025 pukul 08.00 s/d 11.00 WIB</strong>. untuk melakukan Pengukuran Seragam dan Pembayaran administrasi Daftar Ulang.

                            <br/>
                            <br />
                            Informasi lebih lanjut dan konfirmasi kehadiran dapat menghubungi nomor sekolah di bawah ini.
                            <br/>
                            <br />
                            Jazakumullahu Khairan Katsiran.
                        </p>
                    </div>
                    
                </>
            ) : (
                <p className="text-sm sm:text-lg text-gray-700">{message || "Memuat data..."}</p>
            )}
            <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row justify-center gap-4">

                <button
                    onClick={handleBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg"
                >
                    Tutup
                </button>
                <button
                    onClick={handleContact}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg"
                >
                    Hubungi Pihak Sekolah
                </button>
            </div>
        </main>
    </div>
);
};

export default Pengumuman;
