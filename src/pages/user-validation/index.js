import React, { useState, useEffect } from "react";
import axios from "axios";


import placeholder from "../../assets/images/user-placeholder.png";
import { Link } from "react-router-dom";

const UserValidation = () => {

  const handleLogout = () => {
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setMessage('Tidak ada user ID di localStorage.');
      window.location.href = '/login';
      return;
    }

    axios.get(`https://cbt-smpit.vercel.app/siswa/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response) {
          setMessage(err.response.data.error || 'Gagal memuat data user.');
        } else {
          setMessage('Terjadi kesalahan saat mengambil data.');
        }
      });
  }, []);

  console.log(user)
  return (
    <div className="w-full h-full">
      <main className="flex flex-col md:flex-row h-[100vh]">
        <div id="left-side" className="bg-base px-10 py-5 md:px-20 md:py-10 flex flex-col items-center">
          <img
            src={placeholder}
            alt="user-image"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
          />
          <p className="text-lg md:text-xl font-bold mt-3 md:mt-5 text-black">Profil Peserta</p>
        </div>

        <div id="right-side" className="bg-white px-5 py-5 md:px-20 md:py-10 text-base md:text-xl flex-1 text-black">
          <table className="table-auto text-left border-separate border-spacing-2 w-full">
            <tbody>
              <tr>
                <th>Nama</th>
                <td>:</td>
                <td>{user ? user.nama_lengkap : 'Memuat data...'}</td>
              </tr>
              <tr>
                <th>ID Pendaftar</th>
                <td>:</td>
                <td>{user ? user.id_pendaftar : 'Memuat data...'}</td>
              </tr>
              <tr>
                <th>Asal Sekolah</th>
                <td>:</td>
                <td>{user ? user.asal_sekolah : 'Memuat data...'}</td>
              </tr>
              <tr>
                <th>Jalur Pendaftaran</th>
                <td>:</td>
                <td>{user ? user.jalur_pendaftaran : 'Memuat data...'}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center gap-5 md:gap-20 w-full font-bold">
            <div
              onClick={handleLogout}
              className="bg-red-400 text-white px-5 py-2 text-center cursor-pointer"
            >
              Log Out
            </div>
            <div className="bg-green-400 text-white px-5 py-2 text-center">
              <Link target="_blank" to="/pengumuman">Lihat Hasil</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserValidation;
