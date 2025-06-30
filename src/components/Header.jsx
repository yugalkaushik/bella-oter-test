import BellaIcon from './BellaIcon';

const Header = () => (
  <div className="text-center mb-8 sm:mb-10 md:mb-12">
    <div className="flex justify-center mb-3 sm:mb-4">
      <BellaIcon />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-stone-800 tracking-wide">
      Bella Otér
    </h1>
    <div className="w-10 sm:w-12 h-px bg-rose-400 mx-auto mt-2"></div>
  </div>
);

export default Header;