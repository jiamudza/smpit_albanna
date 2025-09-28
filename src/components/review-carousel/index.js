import React, { useState } from 'react';

const testimonials = [
  {
    name: "M. Fathir Dimas.",
    review: "Sekolah ini sangat membantu saya dalam memahami ilmu agama dan akademik secara seimbang. Guru-gurunya sangat peduli dan inspiratif!",
  },
  {
    name: "Siti N.",
    review: "Anak saya sangat menikmati kegiatan di sekolah ini, terutama karena kegiatan ekstrakurikulernya yang beragam.",
  },
  {
    name: "Budi S.",
    review: "Lingkungan sekolah sangat mendukung pembentukan karakter Islami pada anak. Sekolah ini sangat saya rekomendasikan!",
  },
  {
    name: "Ratna L.",
    review: "Fasilitasnya lengkap dan suasana belajarnya sangat kondusif. Anak saya berkembang pesat di sini!",
  },
  {
    name: "Aisyah M.",
    review: "Program pendidikan dan kegiatan ibadahnya sangat baik. Anak saya senang belajar di sekolah ini.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full mx-auto p-6 bg-white text-center rounded-lg shadow-lg relative overflow-hidden">
      <h3 className="text-center text-lg font-semibold mb-4">Apa kata mereka?</h3>

      {/* Tombol Navigasi di Sebelah Kiri dan Kanan */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-base px-4 py-2 rounded-r text-slate-700 bg-white hover:bg-slate-500 hover:text-white ease-in-out duration-300 z-10 pl-5"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-slate-700 bg-white hover:bg-slate-500 hover:text-white ease-in-out duration-300 px-4 py-2 rounded-l z-10 pr-5"
      >
        &rarr;
      </button>

      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4 px-10">
            <div className="flex justify-center mb-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.267c.969 0 1.371 1.24.588 1.81l-3.453 2.51a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.539 1.118l-3.453-2.51a1 1 0 00-1.175 0l-3.453 2.51c-.784.57-1.838-.197-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118l-3.453-2.51c-.784-.57-.38-1.81.588-1.81h4.267a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            <p className="text-gray-500 font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
