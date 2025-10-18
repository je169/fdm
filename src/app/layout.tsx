import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colegio Ficoa de Montalvo",
  description: "Colegio Ficoa de Montalvo - Educación Integral para el Futuro",
};

// Añadimos iconos para favicon y meta tags básicos (Next los usa si están aquí)
// Usar un favicon.svg que referencia el logo (solución simple)
export const icons = {
  icon: '/favicon.ico?v=1',
  shortcut: '/favicon.ico?v=1',
  apple: '/favicon.ico?v=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Forzar favicon explícito para evitar iconos antiguos en caché/servidos por rutas generadas */}
  <link rel="icon" href="/logo-ficoa.png" />
  <link rel="shortcut icon" href="/logo-ficoa.png" />
  <link rel="apple-touch-icon" href="/logo-ficoa.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}>
        {/* Header / Barra de Navegación */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">Ficoa de Montalvo</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition duration-300">Inicio</Link>
              <Link href="/sobre-nosotros" className="text-gray-600 hover:text-indigo-600 transition duration-300">Sobre Nosotros</Link>
              <Link href="/modelo-educativo" className="text-gray-600 hover:text-indigo-600 transition duration-300">Modelo Educativo</Link>
              <Link href="/admisiones" className="text-gray-600 hover:text-indigo-600 transition duration-300">Admisiones</Link>
              <Link href="/eventos" className="text-gray-600 hover:text-indigo-600 transition duration-300">Eventos</Link>
              <Link href="/contacto" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contacto</Link>
            </div>
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            </div>
          </nav>
          {/* Menú Móvil */}
          <div id="mobile-menu" className="md:hidden hidden px-6 pb-4">
            <Link href="/" className="block py-2 text-gray-600 hover:text-indigo-600">Inicio</Link>
            <Link href="/sobre-nosotros" className="block py-2 text-gray-600 hover:text-indigo-600">Sobre Nosotros</Link>
            <Link href="/modelo-educativo" className="block py-2 text-gray-600 hover:text-indigo-600">Modelo Educativo</Link>
            <Link href="/admisiones" className="block py-2 text-gray-600 hover:text-indigo-600">Admisiones</Link>
            <Link href="/eventos" className="block py-2 text-gray-600 hover:text-indigo-600">Eventos</Link>
            <Link href="/contacto" className="block py-2 text-gray-600 hover:text-indigo-600">Contacto</Link>
          </div>
        </header>
  <main>{children}</main>
  {/* Footer enriquecido */}
  <footer className="bg-[#161FF8] text-white py-10 mt-12" style={{marginTop: 0}}>
          <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            {/* Logo y nombre */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Image src="/logo-ficoa.png" alt="Logo Colegio Ficoa de Montalvo" width={80} height={80} className="object-contain bg-white border-4 border-[#D3B284] rounded-full shadow mx-auto" />
              <span className="font-bold text-lg mt-2">Ficoa de Montalvo</span>
            </div>
            {/* Enlaces rápidos */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-beige mb-2" style={{ color: '#D3B284' }}>Enlaces rápidos</span>
              <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-sm">
                <Link href="/" className="hover:text-[#2EB284] transition">Inicio</Link>
                <Link href="/sobre-nosotros" className="hover:text-[#2EB284] transition">Sobre Nosotros</Link>
                <Link href="/modelo-educativo" className="hover:text-[#2EB284] transition">Modelo Educativo</Link>
                <Link href="/admisiones" className="hover:text-[#2EB284] transition">Admisiones</Link>
                <Link href="/eventos" className="hover:text-[#2EB284] transition">Eventos</Link>
                <Link href="/contacto" className="hover:text-[#2EB284] transition">Contacto</Link>
              </div>
            </div>
            {/* Copyright */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-sm">&copy; 2024 Ficoa de Montalvo. Todos los derechos reservados.</p>
              <p className="text-xs text-[#D3B284]">Diseñado para la comunidad educativa.</p>
            </div>
          </div>
        </footer>
        {/* Lógica menú móvil */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const menuBtn = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              if (menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', function() {
                  mobileMenu.classList.toggle('hidden');
                });
              }
            });
          `
        }} />
      </body>
    </html>
  );
}
