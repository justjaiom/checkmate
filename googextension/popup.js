document.getElementById('copyText').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: saveArticleToFile
      }
    );
  });
});

function saveArticleToFile() {
  setTimeout(() => {
    const selectorsToRemove = [
      'aside', 'footer', 'nav', 'header', 'form', 'button', 'script', 'style', 
      '.advertisement', '.related-links', '.comments', '.sidebar', 
      '.share-buttons', '.related-articles', 'img', 'video', '.subscribe-box'
    ];

    selectorsToRemove.forEach(selector => {
      let elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });

    const contentElements = document.querySelectorAll('p');
    let articleText = '';

    contentElements.forEach(el => {
      if (el.innerText.trim()) {
        articleText += el.innerText + '\n\n';
      }
    });

    const blob = new Blob([articleText.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'article.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // After saving the file, send the article content to MongoDB via API
    fetch('http://localhost:3000/save-article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: articleText.trim() })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message); // "Article saved successfully!"
    })
    .catch(err => {
      console.error('Error:', err);
    });

    alert('Article content saved to file and sent to MongoDB!');
  }, 1000);
}
