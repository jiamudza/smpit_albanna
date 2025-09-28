import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const About = () => {
  return (
    <div className='text-black bg-white'>
      <header className='sticky top-0 z-30'>
        <Header />
      </header>
      <main className='px-5 md:px-7 lg:px-20 my-10'>
        <div >
          <h2 className='text-4xl font-bold text-primary'>Tentang</h2>
          <p className='text-sm font-semibold text-slate-400'>SMP IT Al Banna</p>
        </div>

        <div className='mt-10'>
          <p>
          Kami adalah sekolah islam terpadu yang bertujuan mencetak generasi Qur'ani yang perduli terhadap agama, keluarga, nusa dan bangsa. SMP IT Al Banna Berfokus pada perbaikan akhlakul karimah bagi anak didik, menerapkan nilai-nilai islami pada kehidupan sehari-hari, membantu mewujudkan impian orang tua memiliki anak yang sholih dan sholihah, memiliki sifat amanah dan jujur, memiliki budi pekerti yang baik, santun dan memuliakan orang tua, pembiasaan adab islami setiap hari diterapkan guna tercapai tujuan/impian tersebut.

          </p>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About