import React from "react";

const Mapp = () => {
  return (
    <div>
      <div className="flex justify-center px-5 lg:px-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.014912622135!2d105.17960487401209!3d-5.2603215528812415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c9e60ffff949%3A0x3e0322101d83316a!2sSMP%20IT%20Al%20Banna!5e0!3m2!1sen!2sid!4v1727410640561!5m2!1sen!2sid"
          title="Mapp-location"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full mt-10 h-80 rounded-2xl hover:scale-105 ease-in-out duration-300"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapp;
