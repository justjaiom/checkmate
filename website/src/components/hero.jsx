function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-screen flex items-stretch">
      {/* Left section - 65% for visual */}
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <div className="w-full h-full bg-white flex flex-col items-center justify-center rounded-r-lg p-8">
          <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">AI</span>
          </div>
          <span className="text-3xl font-bold text-gray-800 tracking-wide text-center">
            Fact-Check Chrome Extension
          </span>
        </div>
      </div>

      {/* Right section - 35% for text content */}
      <div className="w-full md:w-3/5 p-16 text-white flex flex-col justify-center">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Fact-Check Blog Articles with AI
        </h1>

        <p className="text-lg mb-8">
          Introducing a Chrome extension that analyzes blog content for accuracy and bias, giving you real-time feedback to ensure that the information you're reading is reliable.
        </p>

        {/* Bullet Points Section */}
        <ul className="text-lg space-y-4">
          {/* Positive Checkmarks */}
          <li className="flex items-center">
            <span className="text-green-400 mr-3 text-2xl">✓</span>
            Analyze content accuracy using Python and OpenAI.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-3 text-2xl">✓</span>
            Store and retrieve fact-checking data using MongoDB.
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-3 text-2xl">✓</span>
            Get real-time reliability scores out of 100 for each article.
          </li>

          {/* Negative Crosses */}
          <li className="flex items-center">
            <span className="text-red-500 mr-3 text-2xl">✗</span>
            Moderately questionable statements highlighted in yellow.
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-3 text-2xl">✗</span>
            Highly dubious information marked in orange.
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-3 text-2xl">✗</span>
            Outright incorrect claims flagged in red.
          </li>
        </ul>

        <button className="mt-8 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
