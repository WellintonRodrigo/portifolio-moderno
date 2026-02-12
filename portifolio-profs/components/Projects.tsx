import React from 'react';

// Interface para os dados do GitHub
interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
}

const Projects = async () => {
  // Substitua 'seu-usuario' pelo seu nome de usuário do GitHub
  const response = await fetch('https://api.github.com/users/WellintonRodrigo/repos?sort=updated&per_page=6', {
    next: { revalidate: 3600 } // Atualiza a lista a cada hora
  });
  
  const repos: Repo[] = await response.json();

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Projetos Recentes</h2>
          <p className="text-slate-600 mt-2">Repositórios buscados diretamente do meu GitHub.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="group p-6 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl">📁</span>
                  <div className="flex gap-3">
                    <a href={repo.html_url} target="_blank" className="text-slate-400 hover:text-slate-900">
                      GitHub
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {repo.description || "Sem descrição disponível."}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-md text-slate-600">
                  {repo.language || "Markdown"}
                </span>
                <span className="text-xs text-slate-400">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;