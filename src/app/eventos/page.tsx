
"use client";
import React, { useState } from "react";
import Image from "next/image";


// Mini carrusel para cada evento

// Lightbox para mostrar imágenes en grande
function Lightbox({ images, current, onClose }: { images: string[]; current: number; onClose: () => void }) {
  const [idx, setIdx] = useState(current);
  const total = images.length;
  const prev = () => setIdx((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIdx((i) => (i === total - 1 ? 0 : i + 1));
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl font-bold">×</button>
      <div className="flex items-center justify-center w-full max-w-3xl">
        <button onClick={prev} className="text-white text-4xl px-4 py-2 hover:text-primary">&#8592;</button>
        <Image
          src={images[idx]}
          alt="Imagen de evento"
          width={900}
          height={600}
          className="rounded-lg max-h-[80vh] object-contain bg-white"
        />
        <button onClick={next} className="text-white text-4xl px-4 py-2 hover:text-primary">&#8594;</button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full border ${i === idx ? 'bg-primary border-white' : 'bg-gray-300 border-gray-400'}`}></button>
        ))}
      </div>
    </div>
  );
}

// Mini carrusel con lightbox
function MiniCarrusel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState<null | number>(null);
  const total = images.length;
  const prev = () => setIdx((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIdx((i) => (i === total - 1 ? 0 : i + 1));
  return (
    <>
      <div className="relative w-full h-56 flex items-center justify-center bg-gray-100 cursor-pointer group"
        onClick={() => setLightbox(idx)}
        title="Haz clic para ver en grande"
      >
        <button
          aria-label="Anterior"
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white z-10"
          style={{ display: total > 1 ? 'block' : 'none' }}
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <Image
          src={images[idx]}
          alt={alt}
          width={600}
          height={224}
          className="object-cover w-full h-56 rounded-t-lg transition-all duration-300 group-hover:opacity-80"
          priority={idx === 0}
        />
        <button
          aria-label="Siguiente"
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow hover:bg-white z-10"
          style={{ display: total > 1 ? 'block' : 'none' }}
        >
          <span className="text-2xl">&#8594;</span>
        </button>
        {total > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-indigo-500' : 'bg-gray-300'}`}></span>
            ))}
          </div>
        )}
        <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Ver en grande</span>
      </div>
      {lightbox !== null && (
        <Lightbox images={images} current={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

export default function EventosPage() {
  // Imágenes locales para Feria Juntos Leemos
  const juntosLeemosImgs = [
    "/assets/img/event/juntosleemos-img1.jpg",
    "/assets/img/event/juntosleemos-img2.jpg",
    "/assets/img/event/juntosleemos-img3.jpg",
    "/assets/img/event/juntosleemos-img4.jpg",
  ];
  // Imágenes reales para Fiestas Julianas
  const fiestasJulianasImgs = [
    "/assets/img/event/fiestasjulianas-img1.jpg",
    "/assets/img/event/fiestasjulianas-img2.jpg",
    "/assets/img/event/fiestasjulianas-img3.jpg",
    "/assets/img/event/fiestasjulianas-img4.jpg",
    "/assets/img/event/fiestasjulianas-img5.jpg",
  ];
  // Imágenes reales para Juramento de la Bandera
  const juramentoBanderaImgs = [
    "/assets/img/event/juramentobander-img1.jpg",
    "/assets/img/event/juramentobander-img2.jpg",
  ];
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Sección Galería de Eventos Pasados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Galería de Eventos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Recordando los momentos especiales que hemos compartido como comunidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fiestas Julianas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
              <MiniCarrusel
                images={fiestasJulianasImgs}
                alt="Fiestas Julianas"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Fiestas Julianas</h3>
              </div>
            </div>
            {/* Feria Juntos Leemos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
              <MiniCarrusel
                images={juntosLeemosImgs}
                alt="Feria Juntos Leemos"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Feria Juntos Leemos</h3>
              </div>
            </div>
            {/* Juramento de la Bandera */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
              <MiniCarrusel
                images={juramentoBanderaImgs}
                alt="Juramento de la Bandera"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Juramento de la Bandera</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}