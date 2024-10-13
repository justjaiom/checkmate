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
  // A small delay to ensure the page is fully loaded, especially for dynamic content
  setTimeout(() => {
    // Remove any distracting or non-content elements on the page
    const selectorsToRemove = [
      'aside', 'footer', 'nav', 'header', 'form', 'button', 'script', 'style', 
      '.advertisement', '.related-links', '.comments', '.sidebar', 
      '.share-buttons', '.related-articles', 'img', 'video', '.subscribe-box'
    ];
    
    // Removing all unwanted elements
    selectorsToRemove.forEach(selector => {
      let elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });

    // Now select all paragraph elements <p> and headers for content extraction
    const contentElements = document.querySelectorAll('p');

    let articleText = '';
    contentElements.forEach(el => {
      // Ensure we only grab visible paragraphs and ignore empty ones
      if (el.innerText.trim()) {
        articleText += el.innerText + '\n\n';
      }
    });

    // If the article text is too small, alert the user
    // if (articleText.trim().length < 50) {
    //   alert('Could not extract the article content properly.');
    //   return;
    // }

    // Create a Blob with the article text and trigger a download
    const blob = new Blob([articleText.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'article.txt';  // Name the file "article.txt"
    document.body.appendChild(link);
    link.click();  // Programmatically click the link to trigger the download
    document.body.removeChild(link);  // Remove the link after download
    URL.revokeObjectURL(url);  // Revoke the object URL after the download

    alert('Article content saved to file!');
  }, 1000); // 1-second delay to wait for dynamic content
}
