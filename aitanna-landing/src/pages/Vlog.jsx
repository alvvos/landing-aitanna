const Blog = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto pb-20 pt-48 lg:pt-64 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 md:mb-20">
        Últimas Noticias
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((post) => (
          <article
            key={post}
            className="bg-aitanna-dark rounded-xl overflow-hidden border border-slate-800 hover:border-aitanna-teal transition"
          >
            <div className="h-48 bg-slate-800"></div>
            <div className="p-6">
              <span className="text-aitanna-glow text-xs font-bold uppercase tracking-wider">
                Tecnología
              </span>
              <h2 className="text-xl font-semibold text-white mt-2 mb-3">
                Título del artículo {post}
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                Un resumen breve sobre el contenido interesante que Aitanna
                tiene para ofrecer...
              </p>
              <button className="text-white text-sm font-medium hover:text-aitanna-glow transition">
                Leer más →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
