import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 px-10">
        <h1 className="text-center mt-20 text-5xl font-extrabold text-slate-900">
          Bem-vindo ao meu novo Portfólio!
        </h1>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900 border-t border-white/5">
        © 2026 - Desenvolvido por Wellinton Rodrigo Silva
      </footer>
      </main>
    </>
  );
}