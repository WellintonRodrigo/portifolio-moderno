import React from 'react';

const Skills = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Habilidades & Especialidades</h2>
          <p className="mt-4 text-slate-600">Um resumo das tecnologias que domino e minhas frentes de atuação.</p>
        </div>

        {/* Container da Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Bloco 1: Frontend (Destaque) */}
          <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500 transition-colors">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 font-bold">JS</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Desenvolvimento Frontend</h3>
              <p className="text-slate-600 mb-6">Criação de interfaces modernas e responsivas utilizando React e Next.js, com foco total em performance e Core Web Vitals.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bloco 2: Backend */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">Backend & API</h3>
            <p className="text-slate-300 text-sm">Node.js, bancos de dados SQL/NoSQL e arquitetura de microsserviços.</p>
            <div className="mt-4 flex gap-4 text-2xl opacity-50">
              {/* Aqui você pode colocar ícones depois */}
              <span>Node</span> <span>Postgres</span> <span>Prisma</span>
            </div>
          </div>

          {/* Bloco 3: Idiomas */}
          <div className="bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center">
            <span className="text-4xl mb-2">🌍</span>
            <h3 className="font-bold">Idiomas</h3>
            <p className="text-blue-100 text-sm">Português (Nativo)<br/>Inglês (Basico)</p>
          </div>

          {/* Bloco 4: Ferramentas/Soft Skills */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center">
            <h3 className="font-bold text-slate-900 mb-2">Workflow</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Git & GitHub</li>
              <li>• CI/CD (Vercel)</li>
              <li>• Figma</li>
              <li>• Agile/Scrum</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;