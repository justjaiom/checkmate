document.getElementById('copyText').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: copyPageText
      }
    );
  });
});

function copyPageText() {
  // Copy the text content of the page
  const text = document.body.innerText;
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Page text copied to clipboard!');
}
