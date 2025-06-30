const QuestionView = ({ onOptionSelect, productData }) => (
  <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-stone-700 leading-relaxed">
      What does your body crave today?
    </h2>

    <div className="grid grid-cols-1 gap-4">
      {Object.keys(productData).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onOptionSelect(option)}
          className="group bg-white/80 backdrop-blur-sm border border-stone-300 rounded-2xl px-4 py-5 sm:px-6 sm:py-6 text-stone-700 font-medium text-lg capitalize transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white active:scale-95"
        >
          <span className="group-hover:text-rose-500 transition-colors duration-200">
            {option}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default QuestionView;