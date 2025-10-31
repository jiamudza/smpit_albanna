'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Logo from '../../components/logos';
import formulir from '../../assets/images/formulir.png'
import { MdInfo } from 'react-icons/md';

const RegistForm = () => {
    useEffect(() => {
        const saved = localStorage.getItem("formData");
        if (saved) {
            const parsed = JSON.parse(saved);

            // NOTE: file (foto/bukti_pembayaran) tidak bisa disimpan ke localStorage, jadi hanya string/angka
            setRegistData(parsed);
        }
    }, []);

    const [salary] = useState("");
    const [success, setSuccess] = useState(false);
    const [keterangan, setKeterangan] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})
    const options = [
        { value: "0", label: "Tidak Berpenghasilan" },
        { value: "<1jt", label: "< Rp1.000.000" },
        { value: "1-3jt", label: "Rp1.000.000 – Rp3.000.000" },
        { value: "3-5jt", label: "Rp3.000.000 – Rp5.000.000" },
        { value: "5-10jt", label: "Rp5.000.000 – Rp10.000.000" },
        { value: ">10jt", label: "> Rp10.000.000" },
    ];

    const [preview, setPreview] = useState(null);
    const [paymentPreview, setPaymentPreview] = useState(null)

    const [registData, setRegistData] = useState({
        nama_lengkap: '',
        nama_panggilan: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        NIK: '',
        NKK: '',
        alamat_lengkap: '',
        asal_sekolah: '',
        NISN: '',
        email: '',
        riwayat_penyakit: '',
        anak_ke: '',
        pilihan_program: '',
        foto: null,
        // Data Orang Tua
        nama_ayah: '',
        tempat_lahir_ayah: '',
        tanggal_lahir_ayah: '',
        no_wa_ayah: '',
        email_ayah: '',
        pekerjaan_ayah: '',
        gaji_ayah: '',
        nama_ibu: '',
        tempat_lahir_ibu: '',
        tanggal_lahir_ibu: '',
        no_wa_ibu: '',
        email_ibu: '',
        pekerjaan_ibu: '',
        gaji_ibu: '',
        metode_bayar: '',
        bukti_pembayaran: null
    });


    const handleSubmit = async (e) => {

        e.preventDefault();

        let newErrors = {};
        let firstInvalidField = null;

        Object.keys(registData).forEach((field) => {
            const error = validateField(field, registData[field], registData);
            if (error) {
                newErrors[field] = error;
                if (!firstInvalidField) {
                    firstInvalidField = field; // simpan field pertama yang invalid
                }
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // scroll ke input pertama yang invalid
            const el = document.getElementById(firstInvalidField);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.focus();
            }
            return; // hentikan submit
        }

        const formData = new FormData();
        formData.append('nama_lengkap', registData.nama_lengkap);
        formData.append('nama_panggilan', registData.nama_panggilan);
        formData.append('jenis_kelamin', registData.jenis_kelamin);
        formData.append('tempat_lahir', registData.tempat_lahir);
        formData.append('tanggal_lahir', registData.tanggal_lahir);
        formData.append('NIK', registData.NIK);
        formData.append('NKK', registData.NKK);
        formData.append('alamat_lengkap', registData.alamat_lengkap);
        formData.append('asal_sekolah', registData.asal_sekolah);
        formData.append('NISN', registData.NISN);
        formData.append('email', registData.email);
        formData.append('riwayat_penyakit', registData.riwayat_penyakit);
        formData.append('anak_ke', registData.anak_ke);
        formData.append('pilihan_program', registData.pilihan_program);
        formData.append('foto', registData.foto);
        // Data Orang Tua
        formData.append('nama_ayah', registData.nama_ayah);
        formData.append('tempat_lahir_ayah', registData.tempat_lahir_ayah);
        formData.append('tanggal_lahir_ayah', registData.tanggal_lahir_ayah);
        formData.append('no_wa_ayah', registData.no_wa_ayah);
        formData.append('email_ayah', registData.email_ayah);
        formData.append('pekerjaan_ayah', registData.pekerjaan_ayah);
        formData.append('gaji_ayah', registData.gaji_ayah);
        formData.append('nama_ibu', registData.nama_ibu);
        formData.append('tempat_lahir_ibu', registData.tempat_lahir_ibu);
        formData.append('tanggal_lahir_ibu', registData.tanggal_lahir_ibu);
        formData.append('no_wa_ibu', registData.no_wa_ibu);
        formData.append('email_ibu', registData.email_ibu);
        formData.append('pekerjaan_ibu', registData.pekerjaan_ibu);
        formData.append('gaji_ibu', registData.gaji_ibu);
        formData.append('metode_bayar', registData.metode_bayar);
        formData.append('bukti_pembayaran', registData.bukti_pembayaran);

        try {
            setLoading(true);
            const res = await axios.post(`https://albis-navy.vercel.app/api/newStudents`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success:', res.data);

            setSuccess(true);
            localStorage.removeItem("formData")
        } catch (err) {
            console.error('Error POST:', err.response?.data || err.message);
            alert('Gagal Dalam Mengirim Data.');
        } finally {
            setLoading(false);
        }
    };

    // handle input teks / select
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = files ? files[0] : value;

        const newData = { ...registData, [name]: newValue };
        setRegistData(newData);

        localStorage.setItem("formData", JSON.stringify(newData))

        const error = validateField(name, newValue, newData);
        setErrors((prev) => ({ ...prev, [name]: error }));

        if (name === "metode_pembayaran" && value === "transfer") {
            const errorBukti = validateField("bukti_pembayaran", newData.bukti_pembayaran, newData);
            setErrors((prev) => ({ ...prev, bukti_pembayaran: errorBukti }));
        }

        // kalau pilih tunai → reset error bukti_pembayaran
        if (name === "metode_pembayaran" && value === "tunai") {
            setErrors((prev) => ({ ...prev, bukti_pembayaran: "" }));
        }
    };


    const validateField = (name, value, allData) => {
        let error = "";

        switch (name) {
            case "nama_lengkap":
                if (!value) error = "Nama lengkap wajib diisi";
                break;

            case "nama_panggilan":
                if (!value) error = "Nama panggilan wajib diisi";
                break;

            case "jenis_kelamin":
                if (!value) error = "Jenis kelamin wajib dipilih";
                break;

            case "tempat_lahir":
                if (!value) error = "Tempat lahir wajib diisi";
                break;

            case "tanggal_lahir":
                if (!value) {
                    error = "Tanggal lahir wajib diisi";
                } else if (isNaN(Date.parse(value))) {
                    error = "Tanggal lahir tidak valid";
                }
                break;

            case "NIK":
                if (!value) {
                    error = "NIK wajib diisi";
                } else if (!/^\d{16}$/.test(value)) {
                    error = "NIK harus 16 digit angka";
                }
                break;

            case "NKK":
                if (!value) {
                    error = "NKK wajib diisi";
                } else if (!/^\d{16}$/.test(value)) {
                    error = "NKK harus 16 digit angka";
                }
                break;

            case "alamat_lengkap":
                if (!value) error = "Alamat lengkap wajib diisi";
                break;

            case "asal_sekolah":
                if (!value) error = "Asal sekolah wajib diisi";
                break;

            case "NISN":
                if (!value) {
                    error = "NISN wajib diisi";
                } else if (!/^\d{10}$/.test(value)) {
                    error = "NISN harus 10 digit angka";
                }
                break;

            case "email":
                if (value && !/\S+@\S+\.\S+/.test(value)) {
                    error = "Format email tidak valid";
                }
                break;

            case "riwayat_penyakit":
                // optional → tidak perlu error
                break;

            case "anak_ke":
                if (!value) {
                    error = "Urutan kelahiran wajib diisi";
                } else if (isNaN(value) || value < 1 || value > 20) {
                    error = "Urutan kelahiran harus antara 1 sampai 20";
                }
                break;

            case "pilihan_program":
                if (!value) error = "Pilihan program wajib dipilih";
                break;

            case "foto":
                if (!value) {
                    error = "Foto wajib diunggah";
                } else if (value && value.type && !value.type.startsWith("image/")) {
                    error = "File harus berupa gambar";
                }
                break;

            // Data Ayah
            case "nama_ayah":
                if (!value) error = "Nama ayah wajib diisi";
                break;

            case "tempat_lahir_ayah":
                if (!value) error = "Tempat lahir ayah wajib diisi";
                break;

            case "tanggal_lahir_ayah":
                if (!value) {
                    error = "Tanggal lahir ayah wajib diisi";
                } else if (isNaN(Date.parse(value))) {
                    error = "Tanggal lahir ayah tidak valid";
                }
                break;

            case "no_wa_ayah":
            case "no_wa_ibu": {
                const other = name === "no_wa_ayah" ? allData.no_wa_ibu : allData.no_wa_ayah;
                if (!value && !other) {
                    error = "Pastikan salah satu nomor WA orang tua diisi";
                } else if (value && !/^\d{10,13}$/.test(value)) {
                    error = "Nomor WA harus 10–13 digit angka";
                }
                break;
            }

            case "email_ayah":
            case "email_ibu": {
                const other = name === "email_ayah" ? allData.email_ibu : allData.email_ayah;
                if (!value && !other) {
                    error = "Pastikan salah satu email orang tua diisi";
                } else if (value && !/\S+@\S+\.\S+/.test(value)) {
                    error = "Format email tidak valid";
                }
                break;
            }

            case "pekerjaan_ayah":
                if (!value) error = "Pekerjaan ayah wajib diisi";
                break;

            case "gaji_ayah":
                if (!value) error = "Gaji ayah wajib diisi";
                break;

            case "nama_ibu":
                if (!value) error = "Nama ibu wajib diisi";
                break;

            case "tempat_lahir_ibu":
                if (!value) error = "Tempat lahir ibu wajib diisi";
                break;

            case "tanggal_lahir_ibu":
                if (!value) {
                    error = "Tanggal lahir ibu wajib diisi";
                } else if (isNaN(Date.parse(value))) {
                    error = "Tanggal lahir ibu tidak valid";
                }
                break;

            case "pekerjaan_ibu":
                if (!value) error = "Pekerjaan ibu wajib diisi";
                break;

            case "gaji_ibu":
                if (!value) error = "Gaji ibu wajib diisi";
                break;

            case "metode_bayar":
                if (!value) error = "Pilih salah satu metode pembayaran registrasi";
                break;

            case "bukti_pembayaran":
                if (registData.metode_bayar === "Transfer") {
                    if (!value) {
                        error = "Mohon untuk mengunggah bukti transfer";
                    } else if (value && value.type && !value.type.startsWith("image/")) {
                        error = "File harus berupa gambar";
                    }
                }
                break;

            default:
                break;
        }

        return error;
    };


    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;
        setPreview(file ? URL.createObjectURL(file) : null);
        setRegistData((prev) => ({
            ...prev,
            foto: e.target.files[0],
        }));
    };

    const handlePaymentChange = (e) => {
        const file = e.target.files?.[0] || null;
        setPaymentPreview(file ? URL.createObjectURL(file) : null);
        setRegistData((prev) => ({
            ...prev,
            bukti_pembayaran: e.target.files[0],
        }));
    }

    const handleKeterangan = () => {
        try {
            setKeterangan(true);
        } catch (error) {
            console.error('Error showing keterangan:', error);
        }
    }

    return (
        <div id='body' className='text-slate-700 bg-[#eff2f7] h-full '>
            {/* JUDUL */}
            <div className='text-3xl font-bold text-center'>
                <img src={formulir} alt="" className='' />
            </div>
            {/* FORMULIR */}
            <div className='overflow-hidden w-full p-2 lg:px-10'>
                <Logo />
                <div className='flex justify-center items-center gap-3 py-5 font-semibold'>
                    <p>Sudah pernah mendaftar?</p>
                    <a href='https://wa.me/+6285727994765' className='text-white bg-purple-600 rounded-full p-2 text-xs font-semibold hover:bg-purple-300'>Konfirmasi</a>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-3 py-2'>
                    {/* SEPARATE */}
                    {/* left */}
                    <div className='flex-1/2 w-full bg-white p-5 lg:p-10 rounded-lg shadow-lg border-b-4 border-third overflow-hidden h-full scrollbar-hide '>
                        {/* Judul */}
                        <h2 className='text-lg font-bold text-center mb-5 p-2 bg-amber-500 text-white rounded-md'>Data Diri Calon Siswa/Siswi</h2>
                        {/* NAMA LENGKAP */}
                        <label htmlFor="nama_lengkap" className='block font-semibold mb-2 text-sm '>Nama Lengkap</label>
                        <div id='nama_lengkap' className='mt-2'>
                            <input type="text"
                                id="nama_lengkap"
                                name="nama_lengkap"
                                value={registData.nama_lengkap || ""}
                                onChange={handleChange}
                                className={`w-full border rounded-full border-b-3 border-purple-300 py-2 px-4 focus:outline-none text-xs ${errors.nama_lengkap ? 'border-red-400' : 'border-input'}`}
                                placeholder='Nama Lengkap'
                            />
                            {errors.nama_lengkap && <p className='text-xs text-red-400 mt-1'>*{errors.nama_lengkap}</p>}
                        </div>
                        {/* NAMA PANGGILAN */}
                        <div id='nama_panggilan' className='mt-5'>
                            <label htmlFor="nama_panggilan" className='block font-semibold mb-2 text-sm '>Nama Panggilan</label>
                            <input type="text"
                                name="nama_panggilan"
                                value={registData.nama_panggilan || ""}
                                onChange={handleChange}
                                className={`w-full border border-purple-300 rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs ${errors.nama_panggilan ? 'border-red-400' : 'border-[#e5e7eb]'}`}
                                placeholder='Nama Panggilan' />
                            {errors.nama_panggilan && <p className='text-xs text-red-400 mt-1'>*{errors.nama_panggilan}</p>}
                        </div>
                        <div className='mt-5'>
                            <label className='block font-semibold mb-2 text-sm '>Jenis Kelamin</label>
                            <div className='flex items-center gap-5'>
                                <div
                                    className='flex items-center'>
                                    <input type="radio" name='jenis_kelamin' id='laki-laki' className='mr-2 radio' value="Laki-laki" checked={registData.jenis_kelamin === "Laki-laki"} onChange={handleChange} />
                                    <label htmlFor="laki-laki" className='text-xs'>Laki-laki</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name='jenis_kelamin' id='perempuan' className='mr-2 radio' value="Perempuan" checked={registData.jenis_kelamin === "Perempuan"}
                                        onChange={handleChange} />
                                    <label htmlFor="perempuan" className='text-xs'>Perempuan</label>
                                </div>

                            </div>
                            {errors.jenis_kelamin && <p className='text-xs text-red-400 mt-1'>*{errors.jenis_kelamin}</p>}
                            <div id='tempat_lahir' className='mt-5'>
                                <label htmlFor="tempat_lahir" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                                <input type="text"
                                    name='tempat_lahir' onChange={handleChange} value={registData.tempat_lahir || ""} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.tempat_lahir ? "border-red-400" : "border-input"}`}
                                    placeholder='Daerah Tempat Lahir' />
                                {errors.tempat_lahir && <p className='text-xs text-red-400 mt-1'>*{errors.tempat_lahir}</p>}
                            </div>
                            <div id='tanggal_lahir' className='mt-5'>
                                <label htmlFor="tanggal_lahir" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                                <input type="date"
                                    name='tanggal_lahir' onChange={handleChange} value={registData.tanggal_lahir || ""} className={`w-full border rounded-full border-b-3 border-purple-300 py-2 px-4 focus:outline-none text-xs ${errors.tanggal_lahir ? "border-red-400" : "border-input"}`}
                                    placeholder='Daerah Tempat Lahir' />
                                {errors.tanggal_lahir && <p className='text-xs text-red-400 mt-1'>*{errors.tanggal_lahir}</p>}
                            </div>
                            {/* nik */}
                            <div id='NIK' className='mt-5'>
                                <label htmlFor="NIK" className='block font-semibold mb-2 text-sm '>Nomor Induk Keluarga (NIK)</label>
                                <input type="number" name="NIK"
                                    onChange={handleChange} min={0} value={registData.NIK || ""} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.NIK ? "border-red-400" : "border-input"}`}
                                    placeholder='Nomor Induk Keluarga' />
                                {errors.NIK && <p className='text-xs text-red-400 mt-1'>*{errors.NIK}</p>}
                            </div>

                            {/* NKK */}
                            <div id='NKK' className='mt-5'>
                                <label htmlFor="NKK" className='block font-semibold mb-2 text-sm '>Nomor Kartu Keluarga (NKK)</label>
                                <input type="number" name='NKK' min={0} value={registData.NKK || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.NKK ? "border-red-400" : "border-input"}`}
                                    placeholder='Nomor Kartu Keluarga' />
                                {errors.NKK && <p className='text-xs text-red-400 mt-1'>*{errors.NKK}</p>}
                            </div>

                            {/* ALAMAT LENGKAP */}
                            <div id='alamat_lengkap' className='mt-5'>
                                <label htmlFor="alamat_lengkap" className='block font-semibold mb-2 text-sm '>Alamat Lengkap</label>
                                <input type="text" name='alamat_lengkap' value={registData.alamat_lengkap || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.alamat_lengkap ? "border-red-400" : "border-input"}`}
                                    placeholder='Alamat' />
                                {errors.alamat_lengkap && <p className='text-xs text-red-400 mt-1'>*{errors.alamat_lengkap}</p>}
                            </div>

                            {/* Asal Sekolah */}
                            <div id='asal_sekolah' className='mt-5'>
                                <label htmlFor="asal_sekolah" className='block font-semibold mb-2 text-sm '>Asal Sekolah</label>
                                <input type="text" value={registData.asal_sekolah || ""} name='asal_sekolah'
                                    onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.asal_sekolah ? "border-red-400" : "border-input"}`}
                                    placeholder='SD tempat bersekolah' />
                                {errors.asal_sekolah && <p className='text-xs text-red-400 mt-1'>*{errors.asal_sekolah}</p>}
                            </div>
                            <div id='NISN' className='mt-5'>
                                <label htmlFor="NISN" className='block font-semibold mb-2 text-sm '>NISN</label>
                                <input type="number"
                                    name='NISN' min={0}
                                    onChange={handleChange} value={registData.NISN || ""} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.NISN ? "border-red-400" : "border-input"}`}
                                    placeholder='Nomor Induk Siswa Nasional' />
                                {errors.NISN && <p className='text-xs text-red-400 mt-1'>*{errors.NISN}</p>}
                            </div>
                            <div id='email' className='mt-5'>
                                <label htmlFor="email" className='block font-semibold mb-2 text-sm '>E-mail Aktif</label>
                                <input type="email"
                                    name='email'
                                    onChange={handleChange} value={registData.email || ""} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.email ? "border-red-400" : "border-input"}`}
                                    placeholder='E-mail (opsional)' />
                                {errors.email && <p className='text-xs text-red-400 mt-1'>*{errors.email}</p>}
                            </div>
                            <div id='riwayat_penyakit' className='mt-5'>
                                <label htmlFor="riwayat_penyakit" className='block font-semibold mb-2 text-sm '>Riwayat Penyakit</label>
                                <input type="text" name='riwayat_penyakit' value={registData.riwayat_penyakit || ""}
                                    onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs`}
                                    placeholder='Riwayat Penyakit (kosongkan jika tidak ada)' />
                            </div>
                            <div id='anak_ke' className='mt-5'>
                                <label htmlFor="Anak ke-" className='block font-semibold mb-2 text-sm '>Anak ke-</label>
                                <input type="number" name='anak_ke' min={0} value={registData.anak_ke || ""}
                                    onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.anak_ke ? "border-red-400" : "border-input"}`}
                                    placeholder='Urutan Kelahiran' />
                                {errors.anak_ke && <p className='text-xs text-red-400 mt-1'>*{errors.anak_ke}</p>}
                            </div>
                            {/* PILIHAN PROGRAM */}
                            <div id='pilihan_program' className='mt-5'>
                                <label htmlFor="pilihan_program" className='block font-semibold mb-2 text-sm '>Pilihan Program</label>
                                <div className='flex flex-col lg:flex-row gap-5 lg:items-center'>

                                    <div className='flex items-center gap-1'>
                                        <input type="radio" name='pilihan_program'
                                            value="Reguler" onChange={handleChange} checked={registData.pilihan_program === "Reguler"}
                                            id='reguler' className='mr-1 radio' />
                                        <label htmlFor="reguler" className='text-xs'>Reguler</label>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <input type="radio" name='pilihan_program'
                                            value="Prestasi" onChange={handleChange} checked={registData.pilihan_program === "Prestasi"}
                                            id='unggulan' className='mr-1 radio' />
                                        <label htmlFor="prestasi" className='text-xs'>Prestasi</label>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <input type="radio" name='pilihan_program' id='boarding'
                                            value="Boarding" onChange={handleChange} checked={registData.pilihan_program === "Boarding"}
                                            className='mr-1 radio' />
                                        <label htmlFor="boarding" className='text-xs'>Boarding</label>
                                    </div>
                                    <div
                                        onClick={handleKeterangan}
                                        className='bg-amber-500 hover:bg-amber-300 text-white text-[10px] lg:text-sm font-semibold rounded-md p-2 w-30 text-center overflow-hidden cursor-pointer transition-all ease-in-out duration-200'>Apa Bedanya?</div>

                                </div>
                                {errors.pilihan_program && <p className='text-xs text-red-400 mt-1'>*{errors.pilihan_program}</p>}

                                {/* FOTO */}
                                <div className='mt-5'>
                                    <label htmlFor="foto" className='block font-semibold mb-2 text-sm '>Foto</label>
                                    <label htmlFor='foto'
                                        className='cursor-pointer inline-block text-placeholder px-4 py-2 rounded-full text-xs border border-b-3 border-third hover:bg-[#1B3C53] hover:text-white transition-all duration-300'
                                    >Pas Foto</label>
                                    <input type="file" accept='image/*' id='foto' className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs hidden'
                                        onChange={handleFileChange}
                                    />
                                    {errors.foto && <p className='text-xs text-red-400 mt-1'>*{errors.foto}</p>}


                                    {preview && (
                                        <div className='mt-2'>
                                            <img src={preview} alt="Preview" className='w-20 h-20 object-cover rounded-md' />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* right */}
                    <div className='flex-1/2 w-full bg-white p-5 lg:p-10 rounded-md border-b-4 border-third shadow-lg overflow-hidden h-full scrollbar-hide'>
                        {/* Judul */}
                        <h2 className='text-lg font-bold text-center mb-5 p-2 bg-amber-500 text-white rounded-md'>Data Orang Tua</h2>
                        <h3 className='text-sm font-bold py-2 text-center bg-amber-400 text-white w-full rounded-md'>Data Ayah</h3>

                        <div id='nama_ayah' className='mt-5'>
                            <label htmlFor="nama_ayah" className='block font-semibold mb-2 text-sm '>Nama</label>
                            <input type="text" name='nama_ayah' value={registData.nama_ayah || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.nama_ayah ? "border-red-400" : "border-input"}`}
                                placeholder='Nama Ayah' />
                            {errors.nama_ayah && <p className='text-xs text-red-400 mt-1'>*{errors.nama_ayah}</p>}
                        </div>
                        <div id='tempat_lahir_ayah' className='mt-5'>
                            <label htmlFor="tempat_lahir_ayah" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                            <input type="text" name='tempat_lahir_ayah' value={registData.tempat_lahir_ayah || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.tempat_lahir_ayah ? "border-red-400" : "border-input"}`}
                                placeholder='Daerah Tempat Lahir' />
                            {errors.tempat_lahir_ayah && <p className='text-xs text-red-400 mt-1'>*{errors.tempat_lahir_ayah}</p>}
                        </div>
                        <div id='tanggal_lahir_ayah' className='mt-5'>
                            <label htmlFor="tanggal_lahir_ayah" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                            <input type="date" name='tanggal_lahir_ayah' value={registData.tanggal_lahir_ayah || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.tanggal_lahir_ayah ? "border-red-400" : "border-input"}`}
                                placeholder='Daerah Tempat Lahir' />
                            {errors.tanggal_lahir_ayah && <p className='text-xs text-red-400 mt-1'>*{errors.tanggal_lahir_ibu}</p>}
                        </div>
                        <div id='no_wa_ayah' className='mt-5'>
                            <label htmlFor="no_wa_ayah" className='block font-semibold mb-2 text-sm '>No. Telp/HP (Aktif WA)</label>
                            <input type="number" name='no_wa_ayah' min={0} value={registData.no_wa_ayah || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.no_wa_ayah ? "border-amber-400" : "border-input"}`}
                                placeholder='Nomor Handphone' />
                            {errors.no_wa_ayah && <p className='text-xs text-amber-400 mt-1'>*{errors.no_wa_ayah}</p>}
                        </div>
                        <div name='email_ayah' className='mt-5'>
                            <label htmlFor="email_ayah" className='block font-semibold mb-2 text-sm '>E-Mail</label>
                            <input type="email" name='email_ayah' value={registData.email_ayah || ""} id='email_ayah' onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.email_ayah ? "border-amber-400" : "border-input"}`}
                                placeholder='E-mail' />
                            {errors.email_ayah && <p className='text-xs text-amber-400 mt-1'>*{errors.email_ayah}</p>}
                        </div>
                        <div id='pekerjaan_ayah' className='mt-5'>
                            <label htmlFor="pekerjaan_ayah" className='block font-semibold mb-2 text-sm '>Pekerjaan</label>
                            <input type="text" name='pekerjaan_ayah' value={registData.pekerjaan_ayah} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.pekerjaan_ayah ? "border-red-400" : "border-input"}`}
                                placeholder='Pekerjaan' />
                            {errors.pekerjaan_ayah && <p className='text-xs text-red-400 mt-1'>*{errors.pekerjaan_ayah}</p>}
                        </div>
                        <div id='gaji_ayah' className='mt-5'>
                            <label className="block text-sm font-semibold mb-2">
                                Gaji Ayah per Bulan
                            </label>
                            <select
                                name="gaji_ayah"
                                value={registData.gaji_ayah}
                                onChange={handleChange}
                                className="w-full border py-2 px-4 text-xs focus:outline-none rounded-full appearance-none border-b-3 border-third"
                            >
                                <option value="">-- Pilih Gaji --</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>

                            {salary && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Pilihan: <span className="font-medium">{salary}</span>
                                </p>
                            )}
                            {errors.gaji_ayah && <p className='text-xs text-red-400 mt-1'>*{errors.gaji_ayah}</p>}

                        </div>
                        <h3 className='text-sm font-bold py-2 text-center bg-amber-400 text-white w-full mt-10 rounded-md'>Data Ibu</h3>

                        <div id='nama_ibu' className='mt-5'>
                            <label htmlFor="nama_ibu" className='block font-semibold mb-2 text-sm '>Nama</label>
                            <input type="text" name='nama_ibu' value={registData.nama_ibu || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.nama_ibu ? "border-red-400" : "border-input"}`}
                                placeholder='Nama Ibu' />
                            {errors.nama_ibu && <p className='text-xs text-red-400 mt-1'>*{errors.nama_ibu}</p>}
                        </div>
                        <div id='tempat_lahir_ibu' className='mt-5'>
                            <label htmlFor="tempat_lahir_ibu" className='block font-semibold mb-2 text-sm '>Tempat Lahir</label>
                            <input type="text" name='tempat_lahir_ibu' value={registData.tempat_lahir_ibu || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.tempat_lahir_ibu ? "border-red-400" : "border-input"}`}
                                placeholder='Daerah Tempat Lahir' />
                            {errors.tempat_lahir_ibu && <p className='text-xs text-red-400 mt-1'>*{errors.tempat_lahir_ibu}</p>}
                        </div>
                        <div id='tanggal_lahir_ibu' className='mt-5'>
                            <label htmlFor="tanggal_lahir_ibu" className='block font-semibold mb-2 text-sm '>Tanggal Lahir</label>
                            <input type="date" name='tanggal_lahir_ibu' value={registData.tanggal_lahir_ibu || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.tanggal_lahir_ibu ? "border-red-400" : "border-input"}`}
                            />
                            {errors.tanggal_lahir_ibu && <p className='text-xs text-red-400 mt-1'>*{errors.tanggal_lahir_ibu}</p>}
                        </div>
                        <div id='no_wa_ibu' className='mt-5'>
                            <label htmlFor="no_wa_ibu" className='block font-semibold mb-2 text-sm '>No. Telp/HP (Aktif WA)</label>
                            <input type="number" name='no_wa_ibu' min={0} value={registData.no_wa_ibu || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.no_wa_ibu ? "border-amber-400" : "border-input"}`}
                                placeholder='Nomor Handphone' />
                            {errors.no_wa_ibu && <p className='text-xs text-amber-400 mt-1'>*{errors.no_wa_ibu}</p>}
                        </div>
                        <div id='email_ibu' className='mt-5'>
                            <label htmlFor="email_ibu" className='block font-semibold mb-2 text-sm '>E-Mail</label>
                            <input type="email" name='email_ibu' value={registData.email_ibu || ""} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.email_ibu ? "border-amber-400" : "border-input"}`}
                                placeholder='E-mail' />
                            {errors.email_ibu && <p className='text-xs text-amber-400 mt-1'>*{errors.email_ibu}</p>}
                        </div>
                        <div id='pekerjaan_ibu' className='mt-5'>
                            <label htmlFor="pekerjaan_ibu" className='block font-semibold mb-2 text-sm '>Pekerjaan</label>
                            <input type="text" name='pekerjaan_ibu' value={registData.pekerjaan_ibu} onChange={handleChange} className={`w-full border rounded-full border-b-3 py-2 px-4 border-purple-300 focus:outline-none text-xs ${errors.pekerjaan_ibu ? "border-red-400" : "border-input"}`}
                                placeholder='Pekerjaan' />
                            {errors.pekerjaan_ibu && <p className='text-xs text-red-400 mt-1'>*{errors.pekerjaan_ibu}</p>}
                        </div>
                        <div id='gaji_ibu' className='mt-5'>
                            <label className="block text-sm font-semibold mb-2">
                                Gaji Ibu per Bulan
                            </label>
                            <select
                                name="gaji_ibu"
                                value={registData.gaji_ibu}
                                onChange={handleChange}
                                className="w-full border py-2 px-4 text-xs focus:outline-none rounded-full appearance-none border-b-3 border-third"
                            >
                                <option value="">-- Pilih Gaji --</option>
                                {options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>

                            {salary && (
                                <p className="mt-2 text-sm text-gray-600">
                                    Pilihan: <span className="font-medium">{salary}</span>
                                </p>
                            )}
                            {errors.gaji_ibu && <p className='text-xs text-red-400 mt-1'>*{errors.gaji_ibu}</p>}
                        </div>

                        <div className='mt-5'>
                            <label className='block font-semibold mb-2 text-sm '>Metode Pembayaran (Rp250.000)</label>
                            <div className='flex items-center gap-5'>
                                <div
                                    className='flex items-center'>
                                    <input type="radio" name='metode_bayar' id='tunai' className='mr-2 radio' value="Tunai" checked={registData.metode_bayar === "Tunai"} onChange={handleChange} />
                                    <label htmlFor="tunai" className='text-xs'>Tunai</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type="radio" name='metode_bayar' id='transfer' className='mr-2 radio' value="Transfer" checked={registData.metode_bayar === "Transfer"}
                                        onChange={handleChange} />
                                    <label htmlFor="transfer" className='text-xs'>Transfer</label>
                                </div>


                            </div>
                            {errors.metode_bayar && <p className='text-xs text-red-400 mt-1'>*{errors.metode_bayar}</p>}
                            {registData.metode_bayar === "Transfer" && (<div className='mt-2'>
                                <div className='mt-2 flex justify-start items-start gap-2 p-3 rounded-md bg-amber-400'>
                                    <MdInfo size={17} className='text-white mt-1' />
                                    <p className='text-[10px]'>
                                        <span className='font-bold text-lg'>BSI (Bank Syariah Indonesia)</span>
                                        <br />
                                        <span className='text-sm font-semibold'>No. Rek: 8332440000002026</span>
                                        <br/>
                                        <span>(SPMB SMP IT AL BANNA)</span>
                                        <br />
                                        <div className='mt-3'></div>
                                        <span className='font-semibold'>*Catatan:</span>
                                        <br />
                                        <span className='italic'>Transfer secara online/realtime, harap <span className='font-semibold'>tidak</span> menggunakan <span className='font-semibold'>BI-FAST</span></span>
                                    </p>
                                </div>
                                <label className='block font-semibold mb-2 text-sm mt-2'>Bukti Pembayaran</label>
                                <label htmlFor='bukti_pembayaran'
                                    className='cursor-pointer inline-block text-placeholder px-4 py-2 rounded-full text-xs border border-b-3 border-third hover:bg-[#1B3C53] hover:text-white transition-all duration-300'
                                >Upload Bukti Pembayaran</label>
                                <input type="file" name='bukti_pembayaran' accept='image/*' id='bukti_pembayaran' className='w-full border rounded-full border-b-3 border-third py-2 px-4 focus:outline-none text-xs hidden'
                                    onChange={handlePaymentChange}
                                />
                                {errors.bukti_pembayaran && <p className='text-xs text-red-400 mt-1'>*{errors.bukti_pembayaran}</p>}


                                {paymentPreview && (
                                    <div className='mt-2'>
                                        <img src={paymentPreview} alt="payment" className='w-20 h-20 object-cover rounded-md' />
                                    </div>
                                )}
                            </div>)}
                            {registData.metode_bayar === "Tunai" && (<div className='mt-2 flex justify-start items-center gap-2 bg-slate-300 p-3 rounded-md'>
                                <MdInfo size={30} />
                                <p className='text-[10px] italic'>Jika memilih metode tunai, harap wali siswa untuk datang langsung ke SMPIT AL BANNA untuk melakukan pembayaran registrasi sebesar <span className='font-semibold'>Rp250.000</span> dan konfirmasi.</p>
                            </div>)}
                        </div>
                        {/* BUTTON SUBMIT */}
                        <div className='mt-10 text-center flex gap-5'>
                            <div onClick={() => {
                                localStorage.removeItem("formData");
                                window.location.reload();
                                window.scrollTo(0, 0);
                            }} className='w-3/12 bg-slate-500 text-white text-sm font-semibold rounded-md p-2 hover:bg-red-300 transition-all duration-300 cursor-pointer'>Reset Data</div>
                            <button type='submit' className='w-8/12 bg-amber-500 text-white text-sm font-semibold rounded-md p-2 hover:bg-amber-300 transition-all duration-300'>Kirim Formulir</button>
                        </div>

                    </div>


                </form>

            </div>
            {success && (<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3'>
                <div className='bg-white p-5 rounded-md text-center'>
                    <h2 className='text-lg font-bold mb-4'>Pendaftaran Berhasil!</h2>
                    <p className='mb-4'>Terima kasih telah mengisi formulir pendaftaran. Kami akan menghubungi Anda melalui email atau nomor WhatsApp yang telah Anda berikan.</p>
                    <button onClick={() => {
                        setSuccess(false);
                        window.location.reload();
                    }} className='bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-300 transition-all duration-300'>Tutup</button>
                </div>
            </div>)}
            {keterangan && (<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-20 h-screen w-screen'>
                <div className='bg-white h-[80vh] w-screen rounded-md text-left overflow-y-auto relative z-0'>
                    <div className='p-5 overflow-auto scrollbar-hide'>
                        <h2 className='text-lg font-semibold mb-4'>Keterangan Program</h2>
                        <div className='mb-4'>
                            <h3 className='font-bold'>Reguler</h3>
                            <p>Program Reguler adalah program untuk pendaftar umum</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold'>Prestasi</h3>
                            <p className=''>Program Prestasi adalah program pendaftar diperuntukan bagi siswa yang memiliki prestasi non akademik dan tahfidz dengan melampirkan sertifikat bukti prestasi (piagam, sertifikat, dll).</p>
                            <p className='text-sm mt-2 text-white rounded-full p-2 bg-purple-700 font-semibold'>*Bagi pendaftar yang lulus dan diterima jalur prestasi, maka tidak dikenakan biaya bangunan.</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold'>Boarding</h3>
                            <p className=''>Program Boarding diperuntukkan bagi pendaftar yang ingin tinggal di asrama. dengan beberapa program boarding yaitu:
                                <br />
                                <ol className='text-xs font-semibold mt-2'>
                                    <li>Halaqah Tahsin</li>
                                    <li>Halaqah Qur'an</li>
                                    <li>Pelajaran Diniyyah</li>
                                    <li>Majelis Surat Pilihan</li>
                                    <li>Dauroh Qur'an</li>
                                    <li>Mukhoyam Qur'an</li>
                                </ol>
                                <p className='text-sm bg-purple-700 text-white rounded-full p-2 mt-2 font-semibold'>*Bagi yang lulus dan diterima jalur Boarding, maka tidak dikenakan biaya SPP selama 3 Tahun</p>
                            </p>


                        </div>

                    </div>

                    <div className='sticky bottom-0 py-3 text-center bg-white'>
                        <button onClick={() => setKeterangan(false)} className='bg-amber-500 text-white text-xs px-4 py-2 rounded-md hover:bg-amber-300 transition-all duration-300'>Tutup</button>
                    </div>
                </div>
            </div>)}
            {loading && (<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='bg-white p-5 rounded-md text-center'>
                    <h2 className='text-lg font-bold mb-4'>Loading...</h2>
                    <p className='mb-4'>Mohon tunggu sebentar, Data sedang di unggah.</p>
                </div>
            </div>)}
        </div>
    )

}

export default RegistForm