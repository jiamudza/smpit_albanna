import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const VisiMisi = () => {
  return (
    <div className='bg-white text-black'>
      <header className='sticky top-0 z-30'>
        <Header />
      </header>
      <main className='px-5 md:px-7 lg:px-20 my-10'>
        <div >
          <h2 className='text-4xl font-bold text-primary'>Visi Misi</h2>
          <p className='text-sm font-semibold text-slate-400'>SMPIT Al Banna</p>
        </div>

        <div className='mt-10'>
          <p>
            Visi: Mencetak Generasi Qur'ani yang Cerdas dan Berkarakter
          </p>
          <p className='mt-5'>Misi:</p>
          <ul className='list-decimal px-11'>
            <li>Melaksanakan pendidikan Islami yang berlandaskan Al-Qur’an dan Hadist.</li>
            <li>Menyelenggarakan KBM aktif dengan pendekatan spiritual.</li>
            <li>Mengembangkan pendidkan sesuai standar pendidikan nasional.</li>
            <li>Memaksimalkan teknologi informasi dalam proses pembelajaran dan pengelolaan sekolah.</li>
            <li>Menghasilkan lulusan berkakhlak Islami dan berdaya saing.</li>
            <li>Menjalin komunikasi dan kerjasama yang baik dengan orang tua dan Masyarakat.</li>
          </ul>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default VisiMisi