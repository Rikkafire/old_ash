import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Services Section - The Systems */}
        <section id="services" className="py-32 bg-[#050505] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center lg:text-left">
              <h2 className="text-lily-red font-bold tracking-[0.4em] uppercase mb-6 text-xs">Architectural Core</h2>
              <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">The Systems</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
              {[
                {
                  title: "Core Engineering",
                  desc: "Architecting high-concurrency systems and distributed microservices with absolute reliability.",
                  features: ["Distributed Systems", "Cloud-Native", "Performance Tuning"]
                },
                {
                  title: "Intelligence",
                  desc: "Integrating neural networks and automated decision engines into enterprise workflows.",
                  features: ["Custom LLMs", "Predictive Analytics", "Process Automation"]
                },
                {
                  title: "Infrastructure",
                  desc: "Immutable cloud architectures and automated scaling protocols for global availability.",
                  features: ["Terraform/IaC", "K8s Orchestration", "Edge Delivery"]
                }
              ].map((service, i) => (
                <div 
                  key={i} 
                  className="group p-16 bg-black hover:bg-zinc-950 transition-all duration-700"
                >
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-widest uppercase">{service.title}</h4>
                  <p className="text-zinc-500 leading-relaxed mb-10 group-hover:text-ash-white transition-colors">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-smoke uppercase">
                        <span className="w-1.5 h-1.5 bg-lily-red" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section - The Repository */}
        <section id="projects" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <h2 className="text-smoke font-bold tracking-[0.4em] uppercase mb-6 text-xs">Production Scale</h2>
                <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">The Repository</h3>
              </div>
              <div className="text-right">
                <p className="text-zinc-600 max-w-xs text-xs tracking-widest uppercase mb-4 leading-relaxed">
                  Architecting solutions for industry leaders and disruptive startups.
                </p>
                <button className="text-white border-b border-lily-red pb-1 hover:text-lily-red transition-colors font-bold tracking-[0.3em] uppercase text-[10px]">
                  Access Full Archives
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-32">
              {[
                { 
                  title: "Project: Helios Engine", 
                  category: "High-Frequency Trading System", 
                  desc: "A low-latency execution engine architected for institutional scale, processing 1M+ transactions per second with sub-millisecond precision.",
                  tags: ["Go", "Kafka", "PostgreSQL", "AWS"],
                  color: "from-lily-red/30 to-black" 
                },
                { 
                  title: "Project: Obsidian Neural", 
                  category: "Enterprise AI Infrastructure", 
                  desc: "Distributed GPU-accelerated training pipeline for large-scale language models, featuring automated hyperparameter optimization.",
                  tags: ["Python", "PyTorch", "Kubernetes", "NVIDIA"],
                  color: "from-smoke/30 to-black" 
                },
              ].map((project, i) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                   <div className="lg:col-span-7">
                      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.color} border border-white/10 group-hover:border-lily-red/40 transition-all duration-1000`}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-md">
                           <button className="px-12 py-5 border border-white/20 hover:border-lily-red bg-black text-white font-bold tracking-[0.4em] uppercase text-xs transition-all">
                             View Case Study
                           </button>
                        </div>
                      </div>
                   </div>
                   <div className="lg:col-span-5">
                      <span className="text-lily-red text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
                      <h4 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-tight group-hover:text-lily-red transition-colors">{project.title}</h4>
                      <p className="text-zinc-500 text-lg leading-relaxed mb-8 font-medium">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="text-[10px] font-bold tracking-[0.2em] text-smoke border border-white/5 px-4 py-2 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack / Authority Section */}
        <section className="py-24 bg-[#050505] border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                 {["Node.js", "React", "Rust", "Go", "Docker", "AWS"].map((tech) => (
                    <div key={tech} className="text-center">
                       <span className="text-xl font-black tracking-[0.2em] uppercase text-white">{tech}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-black relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-[#080808] p-20 md:p-32 border border-white/5 relative overflow-hidden">
              <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
                Scale Your <br /><span className="text-lily-red">Ambition</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-16 max-w-2xl mx-auto tracking-[0.2em] uppercase font-medium leading-relaxed">
                We don't just write code. We architect the future of your enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button className="bg-lily-red hover:bg-[#b34300] text-white px-20 py-8 font-bold tracking-[0.4em] uppercase transition-all hover:scale-105 shadow-2xl shadow-lily-red/30">
                  Begin Engagement
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="py-24 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-xl font-black tracking-[0.4em] text-white uppercase">
              ASH<span className="text-lily-red">LILIES</span>
            </div>
            <div className="flex gap-12 text-zinc-600 text-[10px] font-bold tracking-[0.2em] uppercase">
              <a href="#" className="hover:text-lily-red transition-colors">Twitter</a>
              <a href="#" className="hover:text-lily-red transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-lily-red transition-colors">GitHub</a>
            </div>
            <p className="text-zinc-700 text-[10px] font-bold tracking-[0.1em] uppercase">
              © {new Date().getFullYear()} Ash-Lilies.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
