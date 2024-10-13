import React from 'react';

const FactCheckedArticle = () => {
  const highlights = {
    yellow: 'bg-yellow-100',
    orange: 'bg-orange-100',
    red: 'bg-red-100'
  };

  return (
    <div className="h-full w-full overflow-y-auto p-4 font-sans text-gray-800 bg-gray-50 xl:text-xl 2xl:text-2xl">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex items-center mb-2">
          <div className="text-4xl font-bold text-blue-600 mr-3">65</div>
          <div className="text-sm text-gray-600">
            Fact-Check<br />Score
          </div>
        </div>
        <p className="italic text-gray-700 text-lg 2xl:text-2xl">
          This article contains a mix of accurate and inaccurate information. Please read critically and verify claims from reliable sources.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">
        Climate Change: Myths and Facts
      </h1>

      <p className="mb-4">
        Climate change is a hot topic in today's world, with ongoing debates about its causes and effects. <span className={highlights.yellow}>Some scientists argue that climate change is entirely natural and not influenced by human activities.</span> However, the vast majority of climate scientists agree that human activities are the primary driver of current climate change.
      </p>

      <p className="mb-4">
        <span className={highlights.yellow}>Many experts predict that we have only 5-10 years to take action before climate change becomes irreversible.</span> While urgent action is indeed necessary, the timeframe for action is less definitive and depends on various factors and tipping points in the climate system.
      </p>

      <p className="mb-4">
        <span className={highlights.red}>Fortunately, technology alone can solve the climate crisis without requiring any changes to our lifestyle or economy.</span> In reality, addressing climate change will require both technological innovations and significant changes in our consumption patterns and economic systems.
      </p>

      <p className="mb-4">
        As we continue to learn more about climate change and its impacts, it's crucial to stay informed and critically evaluate the information we encounter. By understanding the facts and taking action, we can work towards a more sustainable future for our planet.
      </p>

      <a href="https://github.com/justjaiom/checkmate/tree/react-website" target="_blank" rel="noopener noreferrer">
        <button className="w-64 mt-6 md:mt-8 bg-blue-600 text-white hover:bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-lg md:text-xl flex items-center justify-center">
          Get CheckMate
        </button>
      </a>
    </div>
  );
};

export default FactCheckedArticle;