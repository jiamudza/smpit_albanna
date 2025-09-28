import React from 'react' 

const PenerimaanSiswaBaru = () => {
  return (
    <div className='text-primary p-5'>
      <h3 className='font-bold text-center'>Formulir Pendafataran Calon Murid SMPIT AL BANNA</h3>
        <form method="get" target="_blank" className='mt-10'>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
              {/* LEFT */}
              <div className='flex-1/2 w-1/2'>
                <h3>Data Diri Calon Siswa/i</h3>
                <div className='mt-5'>
                  <label className='block mb-2 font-semibold text-sm' htmlFor="nama">Nama Lengkap</label>
                  <input className='w-full border border-gray-300 rounded-md p-2 text-xs uppercase focus:outline-none focus:border-primary' type="text" name="nama" id="nama" placeholder='Nama Lengkap' required />
                </div>
                <div className='mt-5'>
                  <label className='block mb-2 font-semibold text-sm' htmlFor="nama">Nama Panggilan</label>
                  <input className='w-full border border-b-2 border-b-purple-800 border-purple-800 rounded-md p-2 text-xs uppercase focus:outline-none focus:border-primary' type="text" name="nama" id="nama" placeholder='Nama Panggilan' required />
                </div>
                {/* Jenis Kelamin */}
                <div className='mt-5'>
                  <label className='block mb-2 font-semibold text-sm mt-5' htmlFor="nama">Jenis Kelamin</label>
                  <input className='w-full border border-b-2 border-b-purple-800 border-purple-800 rounded-md p-2 text-xs uppercase focus:outline-none focus:border-primary' type="checkbox" name="nama" id="nama" placeholder='Nama Panggilan' required value="Laki-Laki" />
                </div>
              </div>
              {/* RIGHT */}
              <div className='flex-1/2 w-1/2'>r</div>
            </div>
        </form>
    </div>
  )
}

export default PenerimaanSiswaBaru