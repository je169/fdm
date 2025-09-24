
export default function Home() {
  return (
    <main>
      {/* Sección de Inicio (Hero) */}
      <section
        className="hero-bg text-white h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/assets/img/page/page-img1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Formando líderes del mañana.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Ofrecemos una educación integral que inspira a nuestros estudiantes a alcanzar su máximo potencial.</p>
          <a href="/admisiones" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">Proceso de Admisión</a>
        </div>
      </section>

      {/* Sección de Llamada a la Acción */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Descubre Nuestra Comunidad</h2>
          <p className="text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">Explora nuestra filosofía educativa y conoce por qué somos la mejor opción para la formación de tus hijos.</p>
          <a href="/modelo-educativo" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 border border-indigo-600 transition duration-300">Nuestro Modelo Educativo</a>
        </div>
      </section>
    </main>
  );
}
