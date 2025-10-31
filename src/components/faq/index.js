import React from "react";

const Faq = () => {
  return (
    <div className="bg-white py-10 px-10">
      <h1 className="font-bold text-4xl text-primary text-center">
        Yang sering ditanyakan
      </h1>
      <div className="lg:flex justify-center flex-wrap mt-4 text-slate-500">
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
            Apakah SMP Islam Terpadu memiliki program asrama atau boarding?
          </h2>
          <p className="mt-2 text-xs">
            Ya, kami memiliki program boarding yang tersedia untuk siswa yang
            ingin tinggal di asrama sekolah. Program ini dilengkapi dengan
            pengawasan, kegiatan keagamaan, serta fasilitas pendukung lainnya
            untuk menunjang proses belajar siswa.
          </p>
        </div>
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
          Bagaimana cara pendaftaran siswa baru di SMP Islam Terpadu?
          </h2>
          <p className="mt-2 text-xs">
          Pendaftaran siswa baru di SMP Islam Terpadu dilakukan melalui beberapa tahap, yaitu pengisian formulir pendaftaran, mengikuti tes seleksi, dan wawancara. Pendaftaran dapat dilakukan secara online atau langsung di sekolah. Informasi lebih lanjut bisa dilihat di halaman penerimaan siswa baru.
          </p>
        </div>
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
          Apa saja bahasa yang diajarkan di SMP Islam Terpadu?
          </h2>
          <p className="mt-2 text-xs">
          Selain Bahasa Indonesia dan Bahasa Inggris sebagai bagian dari kurikulum nasional, SMP Islam Terpadu juga mengajarkan Bahasa Arab untuk memperkuat pemahaman siswa dalam membaca dan memahami literatur Islam serta untuk mendukung kegiatan ibadah.
          </p>
        </div>
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
          Bagaimana cara orang tua terlibat dalam pendidikan siswa?
          </h2>
          <p className="mt-2 text-xs">
          Kami melibatkan orang tua melalui rapat berkala, seminar parenting, dan komunikasi aktif dengan wali kelas.
          </p>
        </div>
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
          Apa saja program kegiatan ekstrakurikuler yang ditawarkan di SMP Islam Terpadu?
          </h2>
          <p className="mt-2 text-xs">
          SMP Islam Terpadu menawarkan berbagai kegiatan ekstrakurikuler seperti tahfidz Al-Qur'an, pramuka, seni tari, kaligrafi, futsal, editing video dan pemrograman. Program-program ini dirancang untuk mendukung pengembangan keterampilan dan minat siswa di luar kelas.
          </p>
        </div>
        <div className="lg:w-1/3 mt-5">
          <h2 className="font-bold text-black">
          Apakah ada program pemantapan ibadah di SMP Islam Terpadu?
          </h2>
          <p className="mt-2 text-xs">
          Ya, SMP Islam Terpadu memiliki program pemantapan ibadah, yang meliputi pembiasaan shalat berjamaah, tadarus Al-Qur'an, serta kajian keislaman secara rutin. Program ini bertujuan untuk membentuk karakter Islami pada diri siswa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
