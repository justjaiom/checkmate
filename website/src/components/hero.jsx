import React from 'react';
import FactCheckedArticle from './FactCheckedArticle';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-stretch">
      {/* Left section - visual */}
      <FactCheckedArticle className="overflow-hidden w-full md:w-2/5 flex items-center justify-center " ></FactCheckedArticle>
      

      {/* Right section - text content */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-full md:w-3/5 p-6 lg:p-16 text-white flex flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:mb-2 lg:mb-3">
          Fact-Check Articles with AI
        </h1>

        <p className="text-sm mb-3 2xl:mb-8 xl:text-md 2xl:text-2xl ">
          Introducing a Chrome extension that analyzes blog content for accuracy and bias, giving you real-time feedback to ensure that the information you're reading is reliable.
        </p>

        {/* Bullet Points Section */}
        <ul className="text-base md:text-lg lg:text-xl space-y-2 md:space-y-4 xl:text-md">
          {/* Stars */}
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Moderately questionable statements highlighted in yellow.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Highly dubious information marked in orange.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">★</span>
            Outright incorrect claims flagged in red.
          </li>
          {/* Positive Checkmarks */}
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Analyze content accuracy using Python and OpenAI.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Store and retrieve fact-checking data using MongoDB.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2 md:mr-3 text-2xl lg:text-3xl">✓</span>
            Get real-time reliability scores out of 100 for each article.
          </li>
        </ul>

        <a href="https://github.com/justjaiom/checkmate/tree/react-website" target="_blank" rel="noopener noreferrer">
            <button className="w-64 mt-6 md:mt-8 bg-white text-purple-600 hover:bg-gray-100 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-lg md:text-xl flex items-center justify-center">
                Learn More
            </button>
        </a>

      </div>
    </section>
  );
}

export default Hero;
