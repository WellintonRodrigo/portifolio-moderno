import React from 'react';


const Header = () => {

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Portifolio.Profs
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
            <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
            <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            <a href='/Curriculo.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"'
            >
            Currículo
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;