import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen'>
        <main className='text-center'>
            <h1 className='text-[15vw] font-bold text-purple-500 pt-[5vh]'>404</h1>
            <p className='mt-2 text-2xl font-semibold text-slate-600'>Hehe, Maaf yaa. Halaman Ini belum tersedia</p>
            <div className='mt-5'>
            <Link
                to='/'
            className='bg-violet-500 text-white px-3 py-2 rounded-lg mt-5 hover:bg-violet-400 hover:text-slate-600 ease-in-out duration-200'>Klik Untuk Kembali</Link>
            </div>
        </main>
    </div>
  )
}

export default NotFound