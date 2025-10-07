export default function SobreNosotros() {
  return (
    <main>
      {/* Sección Sobre Nosotros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Conoce Nuestro Colegio</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Somos una institución comprometida con la excelencia académica y el desarrollo personal de cada estudiante.</p>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Misión</h3>
                <p className="text-gray-600">Proporcionar un ambiente de aprendizaje seguro, inclusivo y estimulante que fomente la curiosidad intelectual, el pensamiento crítico y el respeto por los demás.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Visión</h3>
                <p className="text-gray-600">Ser una comunidad educativa líder, reconocida por su innovación pedagógica, su compromiso con la excelencia y la formación de ciudadanos globales y responsables.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Valores</h3>
                <p className="text-gray-600">Integridad, Respeto, Colaboración, Innovación y Pasión por el aprendizaje son los pilares que guían cada una de nuestras acciones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Historia del Colegio al final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 drop-shadow-sm border-l-4 border-primary pl-3">Historia del Colegio</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-gray-700 space-y-4">
            <p className="italic text-gray-600">
              En 1989 nace el ideal del Ing. Francisco Calle Gutiérrez, impulsado por la necesidad de los moradores de la Comunidad Ficoa de Montalvo. En ese entonces, existían 25 escuelas fiscales y varias particulares en el Km 8 1/2 Vía Daule, pero más de 1.500 alumnos terminaban la primaria sin poder continuar sus estudios secundarios.
            </p>
            <p>
              El Comité Barrial Ficoa de Montalvo, presidido por el Ing. Francisco Calle Gutiérrez, gestionó ante el Ministerio de Educación la creación de un colegio en el sector, logrando el Acuerdo Ministerial N. 03419 del 10 de diciembre de 1989. Para dar vida a este sueño, se acudió a la Facultad de Filosofía, Letras y Ciencias de la Educación, donde el Sr. Decano Dr. Alejandro Martínez Estrada designó a un selecto equipo de maestros, quienes aceptaron con entusiasmo el reto.
            </p>
            <p>
              La lucha constante por alcanzar este propósito contó con el apoyo de los medios de comunicación, especialmente la Lcda. Luiza Delgadillo y el Lcdo. Kenneth Carrera, quienes brindaron amplia cobertura en el programa “Ventana a la Calle”. Gracias a la sensibilidad de los directivos del Ministerio de Educación, la Subsecretaría y la Dirección Provincial de Educación del Guayas, así como de los políticos de turno, y con más de un centenar de alumnos deseosos de superación, se iniciaron los trámites para hacer realidad este anhelo.
            </p>
            <p>
              En 1991, el colegio comenzó a funcionar en un modesto canchón de caña, cubierto con plástico y sacos de yute, y sin piso. Los primeros profesores —Mercy Sánchez, José Sandoval, Victoria Moreno, Héctor Sarmiento, José Ortega y Francisco López— se comprometieron a trabajar gratuitamente en beneficio de los adolescentes ávidos de conocimientos, con la promesa de que, al obtener el Acuerdo Ministerial, serían nombrados titulares de la institución.
            </p>
            <p>
              Después de tres años de esfuerzo y perseverancia, finalmente, el 6 de julio de 1992, mediante Acuerdo Ministerial No. 2947, se crea oficialmente el Colegio Fiscal Mixto Vespertino Ficoa de Montalvo, cumpliendo así el sueño del Ing. Francisco Calle Gutiérrez y de toda la comunidad.
            </p>
          </div>
        </div>
      </section>
      {/* Oferta Académica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 drop-shadow-sm border-l-4 border-primary pl-3">Oferta Académica</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-gray-700 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-indigo-700 mb-2">Matutino</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                <li>Bachillerato - Carrera Contabilidad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">Vespertino</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                <li>Octavo, Noveno y Décimo de Educación Básica</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-700 mb-2">Nocturna</h3>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                <li>Octavo, Noveno y Décimo de Educación Básica</li>
                <li>Bachillerato - Carrera Ciencias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
