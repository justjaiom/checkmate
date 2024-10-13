const { analyzeAndSaveClaim } = require('./controllers/claimController');
require('./config/dotenv');  // Load .env variables

const inputText = "The earth is flat and orbits the sun in a circular path.";
analyzeAndSaveClaim(inputText);
