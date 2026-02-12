import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Estou sempre aberto a novas oportunidades, colaborações em projetos 
              ou apenas para trocar uma ideia sobre tecnologia.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                  📧
                </div>
                <div>
                  <p className="text-sm text-slate-500">E-mail</p>
                  <p className="font-medium">wellinton.rodrigo26@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                  📱
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="font-medium">+55 (47) 99235-9342</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition h-32" placeholder="Sua mensagem"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-900/20">
                Enviar Mensagem
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;