console.log("Background script loaded.");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
        console.log("Received text:", request.text); // Log the scanned text to the console
    }
});
