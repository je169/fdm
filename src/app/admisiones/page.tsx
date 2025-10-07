import Link from 'next/link';

export default function Admisiones() {
  return (
    <main>
      {/* Sección de Admisiones */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Únete a Nuestra Familia</h2>
          <p className="text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">Estamos emocionados de conocer a nuestros futuros estudiantes. Descubre cómo puedes formar parte de nuestra comunidad educativa.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Pasos para la Admisión</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-2xl font-bold">1</div>
              <h4 className="font-bold text-lg my-3">Solicitud en Línea</h4>
              <p className="text-gray-600">Completa nuestro formulario de solicitud y adjunta los documentos requeridos.</p>
            </div>
            <div className="p-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-2xl font-bold">2</div>
              <h4 className="font-bold text-lg my-3">Entrevista Familiar</h4>
              <p className="text-gray-600">Programaremos una reunión para conocernos mejor y resolver tus dudas.</p>
            </div>
            <div className="p-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto text-2xl font-bold">3</div>
              <h4 className="font-bold text-lg my-3">Resultados</h4>
              <p className="text-gray-600">Recibirás la notificación de admisión y los pasos a seguir para la matrícula.</p>
            </div>
          </div>
          <div className="text-center mt-12">
              <Link href="/contacto" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">Inicia tu Proceso Aquí</Link>
          </div>
        </div>
      </section>
      {/* Sección FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-sm">Preguntas Frecuentes</h3>
          <div className="space-y-6">
            {/* FAQ 2 */}
            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">¿Qué documentos necesito para la admisión?</h4>
              <p className="text-gray-600">Necesitas presentar copia de cédula del estudiante y representante, libreta de calificaciones, certificado de promoción y una foto tamaño carnet.</p>
            </div>
            {/* FAQ 4 */}
            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">¿Cuándo sabré si mi hijo/a fue admitido/a?</h4>
              <p className="text-gray-600">Te notificaremos los resultados en un plazo máximo de 7 días hábiles después de la entrevista familiar.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
