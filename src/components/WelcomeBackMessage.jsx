const WelcomeBackMessage = ({ show, userName }) => {
  if (!show) return null;
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-rose-200 text-rose-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg z-50 transition-all duration-500 animate-slide-down text-base sm:text-lg font-medium">
      Welcome back{userName ? `, ${userName}` : ', beautiful soul'} ✨
    </div>
  );
};

export default WelcomeBackMessage;