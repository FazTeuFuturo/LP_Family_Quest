import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] pt-20 pb-10 px-4 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                 <span className="text-lg">⚔️</span>
              </div>
              <span className="font-cinzel font-black text-xl text-white tracking-tighter">
                FAMILY<span className="text-gold">QUEST</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Transformando a rotina das famílias através da gamificação e da psicologia de jogos de RPG.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-white font-bold mb-6 tracking-widest text-sm uppercase">O Reino</h4>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-text-muted text-sm hover:text-gold transition-colors">Como Funciona</a></li>
              <li><a href="#features" className="text-text-muted text-sm hover:text-gold transition-colors">Diferenciais</a></li>
              <li><a href="#pricing" className="text-text-muted text-sm hover:text-gold transition-colors">Preço</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-white font-bold mb-6 tracking-widest text-sm uppercase">Pergaminhos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-muted text-sm hover:text-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-text-muted text-sm hover:text-gold transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-text-muted text-sm hover:text-gold transition-colors">Central de Ajuda</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-cinzel text-white font-bold mb-6 tracking-widest text-sm uppercase">Suporte do Mestre</h4>
            <p className="text-text-muted text-sm mb-4">
              Dúvidas sobre o reino? Mande um corvo ou chame no WhatsApp.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.405.836 2.498 1.299 4.327 1.299 5.302 0 9.613-4.312 9.615-9.613.001-2.568-1-4.982-2.818-6.8s-4.232-2.818-6.8-2.819c-5.301 0-9.612 4.311-9.615 9.613-.001 1.926.501 3.148 1.448 4.7l-1.108 4.047 4.145-1.087zM17.446 14.19c-.34-.17-2.01-0.99-2.321-1.103-.31-.113-.536-.17-.761.17-.225.341-.871 1.103-1.069 1.33-.197.226-.394.254-.734.085-.34-.17-1.434-.528-2.731-1.685-1.009-.9-1.689-2.011-1.887-2.352-.198-.341-.021-.524.15-.694.153-.153.34-.396.51-.594.17-.198.226-.339.34-.565.113-.227.056-.425-.028-.595-.085-.17-.761-1.835-1.043-2.515-.275-.662-.553-.574-.761-.584l-.649-.011c-.226 0-.593.085-.904.425-.31.341-1.187 1.161-1.187 2.83 0 1.67 1.215 3.285 1.385 3.511.17.227 2.392 3.653 5.793 5.122 3.401 1.469 3.401.979 4.023.922.622-.057 2.011-.822 2.294-1.616s.282-1.471.198-1.613c-.085-.141-.311-.227-.652-.398z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs">
            © 2026 Family Quest — Desenvolvido por <span className="text-white">Synkra AI</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
             <div className="flex items-center gap-1 text-xs text-text-muted">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Servidores Online
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
