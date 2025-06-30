import { useEffect } from 'react';

const ProductResult = ({ product, onStartOver }) => {
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bellaOterSelections') || '[]');
    saved.unshift({ product, timestamp: new Date().toISOString() });
    localStorage.setItem('bellaOterSelections', JSON.stringify(saved.slice(0, 5)));
  }, [product]);

  return (
    <div className="animate-fade-in">
      <div className={`bg-gradient-to-br ${product.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden lg:flex lg:items-center lg:gap-8`}>
        <div className="aspect-square bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 w-full lg:w-1/2">
        </div>

        <div className="mt-6 lg:mt-0 text-center lg:text-left lg:w-1/2 space-y-4">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-stone-700 font-medium text-sm sm:text-base uppercase tracking-wider">
              {product.archetype}
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900">
              {product.productName}
            </h3>
          </div>

          <p className="text-stone-700 font-normal text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mt-2">
            <span className="text-stone-800 font-medium text-sm sm:text-base">
              {product.fabricTag}
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <button
          type="button"
          onClick={onStartOver}
          className="bg-white/80 backdrop-blur-sm border border-stone-300 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-stone-800 font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white active:scale-95"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default ProductResult;