import React from 'react';
import FactCheckedArticle from './FactCheckedArticle';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-stretch">
      {/* Hero content - will be on top for mobile, right for larger screens */}
      <div className="order-1 md:order-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-full md:w-2/5 p-6 lg:p-16 text-white flex flex-col">
        <h1 className="text-2xl 2xl:text-4xl font-bold leading-tight md:mb-2 lg:mb-3">
          Fact-Check Articles with AI
        </h1>

        <p className="text-xl 2xl:text-2xl mb-3 2xl:mb-8 xl:text-md">
          Introducing a Chrome extension that analyzes blog content for accuracy and bias, giving you real-time feedback to ensure that the information you're reading is reliable.
        </p>

        {/* Bullet Points Section */}
        <ul className="text-xl 2xl:text-2xl space-y-2 md:space-y-4">
          {/* Stars */}
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Moderately questionable statements highlighted in yellow.
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Highly dubious information marked in orange.
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Outright incorrect claims flagged in red.
          </li>
          {/* Positive Checkmarks */}
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Analyze content accuracy using Python and OpenAI.
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Store and retrieve fact-checking data using MongoDB.
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Get real-time reliability scores out of 100 for each article.
          </li>
        </ul>

        <a href="https://github.com/justjaiom/checkmate/blob/react-website/readme.md" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-8">
          <button className="w-64 bg-white text-purple-600 hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-lg md:text-xl flex items-center justify-center">
            Learn More
          </button>
        </a>
      </div>

      {/* FactCheckedArticle - will be on bottom for mobile, left for larger screens */}
      <div className="order-2 md:order-1 w-full md:w-3/5 overflow-hidden flex items-center justify-center">
        <FactCheckedArticle />
      </div>
    </section>
  );
}

export default Hero;