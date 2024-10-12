document.getElementById('scanBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: scanText
      });
  });
});

function scanText() {
  const articleText = document.body.innerText; // You can refine this selector to target specific elements
  chrome.runtime.sendMessage({ text: articleText });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
      document.getElementById('output').textContent = request.text;
  }
});
