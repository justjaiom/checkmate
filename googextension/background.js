// This is a simple background script
console.log("Background script loaded.");

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
        console.log("Received text:", request.text);
        // You can process the text here or store it if needed
    }
});
