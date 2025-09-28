import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Kurikulum = () => {
  return (
    <div className='bg-white text-black'>
      <header className='sticky top-0 z-30'>
        <Header />
      </header>
      <main className='px-5 md:px-7 lg:px-20 my-10'>
        <div >
          <h2 className='text-4xl font-bold text-primary'>Kurikulum</h2>
          <p className='text-sm font-semibold text-slate-400'>SMPIT Al Banna</p>
        </div>

        <div className='mt-10'>
          <p>
          SMP IT Al Banna menerapkan Kurikulum Merdeka dalam kegiatan belajar mengajar untuk memberikan kebebasan bagi siswa dan guru dalam mengembangkan potensi sesuai minat, bakat, dan kebutuhan masing-masing. Kurikulum ini menekankan pada pembelajaran yang berpusat pada siswa, di mana siswa didorong untuk aktif dalam mengeksplorasi pengetahuan dan keterampilan secara mandiri serta kolaboratif. Dalam Kurikulum Merdeka, para guru memiliki fleksibilitas untuk mengembangkan metode dan materi pembelajaran yang relevan, sehingga kegiatan belajar menjadi lebih bermakna dan kontekstual sesuai lingkungan dan perkembangan zaman.

          </p>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Kurikulum