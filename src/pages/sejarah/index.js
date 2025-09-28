import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Sejarah = () => {
  return (
    <div className='bg-white text-black'>
      <header className='sticky top-0 z-30'>
        <Header />
      </header>
      <main className='px-5 md:px-7 lg:px-20 my-10'>
        <div >
          <h2 className='text-4xl font-bold text-primary'>Sejarah</h2>
          <p className='text-sm font-semibold text-slate-400'>SMPIT Al Banna</p>
        </div>

        <div className='mt-10'>
          <p>
          SMP IT Al Banna Boarding School merupakan sekolah SMP swasta yang beralamatkan di Jl. Raya Candi Mas, Kab. Lampung Selatan. SMP swasta ini mengawali perjalanannya pada tahun 2016. Sekarang SMP IT Al Banna Boarding School menggunakan kurikulum merdeka belajar. SMP IT Al Banna Boarding School dibawah komando seorang kepala sekolah dengan nama Arief Dwi Wahyu dan operator sekolah Hamka. SMP IT Al Banna Boarding School mendapat status akreditasi grade B dengan nilai 81 (akreditasi tahun 2021) dari BAN-S/M (Badan Akreditasi Nasional) Sekolah/Madrasah.

          </p>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Sejarah