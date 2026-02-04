const Reel = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen mb-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Aitanna en movimiento
        </h1>
        <p className="text-slate-400">
          Descubre nuestra visión a través de nuestros reels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((reel) => (
          <div
            key={reel}
            className="aspect-[9/16] bg-slate-800 rounded-2xl relative overflow-hidden group cursor-pointer border border-slate-700 hover:border-aitanna-teal transition-all"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-500 font-bold text-4xl">
                REEL {reel}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-aitanna-teal text-white px-6 py-2 rounded-full font-bold">
                Ver Video
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;
