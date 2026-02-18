import React from 'react';

/** Miniblog / guía para SEO y dudas previas a la cita */
const ARTICLES = [
  {
    id: 'valoracion-vip',
    title: 'Qué incluye tu valoración VIP en AVM',
    excerpt: 'La primera cita es clave. Te explicamos el paso a paso para que llegues tranquilo y sepas qué esperar.',
    content: 'En la valoración revisamos tu salud bucal, tomamos fotos y modelos si hace falta, y diseñamos un plan personalizado. No hay compromiso: tú decides después. Ideal traer documento y, si los tienes, radiografías recientes.',
  },
  {
    id: 'turismo-dental-cali',
    title: 'Turismo dental en Cali: cómo planear tu viaje',
    excerpt: 'Pacientes de todo el mundo eligen Cali y Tequendama para su transformación. Aquí lo esencial.',
    content: 'Cali ofrece clima estable, costos competitivos y nuestra clínica en Tequendama. Coordinamos traslados desde el aeropuerto, hospedaje cercano y citas concentradas en 5-7 días. Todo se agenda por WhatsApp antes de que viajes.',
  },
  {
    id: 'primera-vez',
    title: 'Primera vez en una clínica de estética dental',
    excerpt: 'Si es tu primera vez, es normal tener dudas. Resolvemos las más frecuentes.',
    content: 'No duele la valoración. Las opciones van desde mini diseño en una cita hasta diseño completo con carillas. Te explicamos precios, tiempos y garantías sin presión. Puedes escribirnos por WhatsApp para una primera consulta sin costo.',
  },
];

const MiniBlog: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-[#0A1128]/5" aria-labelledby="guia-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="guia-heading" className="text-3xl sm:text-4xl font-luxury text-[#0A1128] mb-2 text-center">
          Guía antes de tu cita
        </h2>
        <p className="text-[#0A1128]/70 text-center text-sm font-light mb-12 max-w-xl mx-auto">
          Resolvemos dudas frecuentes y te contamos qué esperar. Para más preguntas, escríbenos por WhatsApp.
        </p>

        <div className="space-y-10">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-[#0A1128]/10 p-6 sm:p-8 shadow-sm"
              itemScope
              itemType="https://schema.org/Article"
            >
              <h3 className="text-xl font-luxury text-[#0A1128] mb-2" itemProp="name">
                {article.title}
              </h3>
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-4" itemProp="description">
                {article.excerpt}
              </p>
              <p className="text-[#0A1128]/80 text-sm font-light leading-relaxed" itemProp="articleBody">
                {article.content}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#0A1128]/50">
          AVM Arquitectura Facial · Tequendama, Cali · Valoración VIP sin compromiso
        </p>
      </div>
    </section>
  );
};

export default MiniBlog;
