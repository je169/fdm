import Image from 'next/image';

export default function ModeloEducativo() {
  return (
    <main>
      {/* Sección de Modelo Educativo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestra Filosofía Educativa</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Creemos en una formación integral que acompaña a nuestros estudiantes en cada etapa de su desarrollo.</p>
          </div>
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <Image src="https://placehold.co/600x400/818cf8/ffffff?text=Filosofía+Educativa" alt="Estudiantes colaborando en un proyecto" width={600} height={400} className="rounded-lg shadow-lg w-full" unoptimized />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Un Viaje de Crecimiento Continuo</h3>
              <p className="text-gray-600 mb-4">En Ficoa de Montalvo, concebimos la educación como un viaje unificado. Nuestro programa académico está diseñado para guiar a los estudiantes de manera fluida a través de las etapas fundamentales de su formación, desde sus primeros años hasta su preparación para la universidad.</p>
              <p className="text-gray-600 mb-4">Nos enfocamos en despertar la curiosidad y el amor por el aprendizaje en un entorno lúdico y seguro durante la infancia. A medida que avanzan, construimos bases académicas sólidas, fomentando el pensamiento crítico, la colaboración y la creatividad. En la etapa final, preparamos a los jóvenes para los retos universitarios y profesionales con un currículo exigente, una visión global y un fuerte énfasis en el desarrollo de su carácter.</p>
              <p className="text-gray-600 mt-4 font-semibold">Todo bajo una misma filosofía que prioriza el desarrollo de habilidades, el bienestar emocional y la formación en valores para la vida.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pilares del Modelo Educativo */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 drop-shadow-sm border-l-4 border-primary pl-3">Pilares de Nuestra Filosofía</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Nuestro modelo educativo se apoya en valores y habilidades clave para el desarrollo integral de los estudiantes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pensamiento Crítico */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
              <span className="text-5xl mb-3 text-primary">🧠</span>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Pensamiento Crítico</h4>
              <p className="text-gray-600 text-center">Fomentamos la capacidad de analizar, cuestionar y tomar decisiones informadas.</p>
            </div>
            {/* Creatividad */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
              <span className="text-5xl mb-3 text-green-600">🎨</span>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Creatividad</h4>
              <p className="text-gray-600 text-center">Impulsamos la innovación y la expresión original en cada área del aprendizaje.</p>
            </div>
            {/* Colaboración */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
              <span className="text-5xl mb-3 text-[#2EB284]">🤝</span>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Colaboración</h4>
              <p className="text-gray-600 text-center">Promovemos el trabajo en equipo, el respeto y la empatía entre todos los miembros de la comunidad.</p>
            </div>
            {/* Valores y Ética */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
              <span className="text-5xl mb-3 text-[#D3B284]">🌱</span>
              <h4 className="font-bold text-lg mb-2 text-gray-800">Valores y Ética</h4>
              <p className="text-gray-600 text-center">Formamos ciudadanos responsables, íntegros y comprometidos con la sociedad.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
