import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuestionView from './components/QuestionView';
import ProductResult from './components/ProductResult';
import WelcomeBackMessage from './components/WelcomeBackMessage';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [userName, setUserName] = useState('');

  const productData = {
    grounding: {
      archetype: "The Rooted One",
      productName: "Terra Embrace Bodysuit",
      description: "Connect with your foundation through mindful movement and earth-inspired comfort.",
      fabricTag: "Organic Bamboo Blend",
      color: "from-amber-100 to-stone-200"
    },
    softness: {
      archetype: "The Gentle Soul",
      productName: "Cloud Touch Bralette",
      description: "Wrap yourself in tender care with our softest, most nurturing design.",
      fabricTag: "TENCEL Soft Modal",
      color: "from-rose-100 to-pink-200"
    },
    energy: {
      archetype: "The Vibrant Spirit",
      productName: "Power Flow Leggings",
      description: "Ignite your inner fire and move with unstoppable confidence and vitality.",
      fabricTag: "Cooling Mesh Tech",
      color: "from-orange-100 to-yellow-200"
    },
    freedom: {
      archetype: "The Unbound",
      productName: "Liberation Tank",
      description: "Release into limitless possibility with unrestricted movement and breathable design.",
      fabricTag: "Weightless Stretch",
      color: "from-sky-100 to-indigo-200"
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('bellaOterUserData');
    const visitCount = parseInt(localStorage.getItem('bellaOterVisitCount') || '0', 10);

    if (savedData) {
      try {
        const userData = JSON.parse(savedData);
        setSelectedOption(userData.lastSelection || null);
        setUserName(userData.userName || '');

        if (visitCount >= 1) {
          setShowWelcomeBack(true);
          const timer = setTimeout(() => setShowWelcomeBack(false), 5000);
          return () => clearTimeout(timer);
        }

        localStorage.setItem('bellaOterVisitCount', (visitCount + 1).toString());
      } catch (error) {
        console.error('Error parsing saved data:', error);
      }
    } else {
      localStorage.setItem('bellaOterVisitCount', '1');
    }
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    const prevData = JSON.parse(localStorage.getItem('bellaOterUserData') || '{}');
    const userData = {
      lastSelection: option,
      userName: userName,
      timestamp: new Date().toISOString(),
      selectionHistory: prevData.selectionHistory || []
    };

    userData.selectionHistory.unshift({
      option,
      date: new Date().toISOString()
    });

    userData.selectionHistory = userData.selectionHistory.slice(0, 5);
    localStorage.setItem('bellaOterUserData', JSON.stringify(userData));
  };

  const startOver = () => {
    setSelectedOption(null);
    setShowWelcomeBack(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-stone-100">
      <WelcomeBackMessage show={showWelcomeBack} userName={userName} />
        <div className="container mx-auto px-4 py-8 max-w-2xl lg:max-w-5xl">
        <Header />
        {!selectedOption ? (
          <QuestionView onOptionSelect={handleOptionSelect} productData={productData} />
        ) : (
          <ProductResult product={productData[selectedOption]} onStartOver={startOver} />
        )}
      </div>
    </div>
  );
};

export default App;
