"use client";

import React, { useRef } from "react";

// Información de contacto
const infoContacto = (
  <div className="mb-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Teléfono */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <span className="text-4xl text-primary mb-2">📞</span>
        <span className="font-semibold text-gray-700 mb-1">Teléfono Rectora</span>
        <a href="tel:+593960667787" className="text-indigo-600 hover:underline font-bold">+593 96 066 7787</a>
      </div>
      {/* Correo */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <span className="text-4xl text-primary mb-2">✉️</span>
        <span className="font-semibold text-gray-700 mb-1">Correo</span>
        <a href="mailto:informacion@ficomontalvo.edu.ec" className="text-indigo-600 hover:underline font-bold">informacion@ficomontalvo.edu.ec</a>
      </div>
      {/* Dirección */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
        <span className="text-4xl text-primary mb-2">📍</span>
        <span className="font-semibold text-gray-700 mb-1">Dirección</span>
        <span className="text-gray-800 font-bold">Cooperativa Ficoa de Montalvo mz 2162</span>
      </div>
    </div>
    {/* Horarios de atención */}
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col items-center text-center">
      <span className="text-2xl text-primary mb-2">🕒</span>
      <span className="font-semibold text-gray-700 mb-1">Horarios de atención</span>
      <span className="text-gray-800">Lunes a Viernes: 08:00 - 16:00</span>
      <span className="text-gray-800">Sábado: 08:00 - 12:00</span>
    </div>
    {/* Mapa */}
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0752188026736!2d-79.92421829999999!3d-2.1247454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d72a69b440e05%3A0xdf00cf8419d30426!2sColegio%20Ficoa%20de%20Montalvo!5e0!3m2!1ses!2sec!4v1758214056277!5m2!1ses!2sec"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default function Contacto() {
  const nombreRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const nombre = nombreRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const mensaje = mensajeRef.current?.value || "";
    const mailto = `mailto:informacion@ficomontalvo.edu.ec?subject=${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje + '\n\nCorreo de contacto: ' + email)}`;
    window.location.href = mailto;
  };

  return (
    <main>
      {/* Sección de Contacto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {infoContacto}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contáctanos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">¿Tienes preguntas? Estamos aquí para ayudarte. Rellena el formulario o contáctanos directamente.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSend}>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre
                      </label>
                      <input ref={nombreRef} className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="grid-first-name" type="text" placeholder="Tu Nombre" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Correo Electrónico
                      </label>
                      <input ref={emailRef} className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" id="grid-email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                        Mensaje
                      </label>
                      <textarea ref={mensajeRef} className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 h-48 resize-none" id="grid-message" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
