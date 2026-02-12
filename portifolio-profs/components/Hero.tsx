import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Decorativo - Círculos de Gradiente */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Disponível para novos projetos
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Desenvolvedor <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Especialista em criar experiências digitais de alta performance com Next.js, 
              TypeScript e Tailwind CSS. Transformando ideias em código sólido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projetos" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 text-center">
                Ver Projetos
              </a>
              <a href="#contato" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
                Entrar em contato
              </a>
            </div>
          </div>

          {/* Lado Direito: Foto ou Ilustração */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Moldura moderna para a foto */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-100 rounded-3xl -rotate-3 border border-slate-200 overflow-hidden shadow-2xl">
                {/* Substitua o 'src' pela sua foto depois */}
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm italic p-4 text-center">
                  [Sua Foto Aqui]
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;