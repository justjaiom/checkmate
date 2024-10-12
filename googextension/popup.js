document.getElementById('scanBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "scanText" }, (response) => {
          if (response && response.text) {
              console.log("Received text:", response.text);
          }
      });
  });
});


function scanText() {
  const articleText = document.body.innerText; // Get all text from the body
  console.log("Scanned text:", articleText); // Log the scanned text to the console
  return articleText; // Optional: return text for further processing if needed
}

