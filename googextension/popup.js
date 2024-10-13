document.getElementById('copyText').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: saveArticleToLocalStorage
      }
    );
  });
});

function saveArticleToLocalStorage() {
  setTimeout(() => {
    // Selectors to temporarily hide elements
    const selectorsToHide = [
      'aside', 'footer', 'nav', 'header', 'form', 'button', 'script', 'style', 
      '.advertisement', '.related-links', '.comments', '.sidebar', 
      '.share-buttons', '.related-articles', 'img', 'video', '.subscribe-box'
    ];

    // Store original display styles to restore them later
    const originalStyles = [];

    // Hide elements by setting their display to 'none'
    selectorsToHide.forEach(selector => {
      let elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        originalStyles.push({ element: el, display: el.style.display }); // Store original style
        el.style.display = 'none';  // Hide the element
      });
    });

    // Extract visible paragraphs and headers for content
    const contentElements = document.querySelectorAll('p');
    let articleText = '';

    contentElements.forEach(el => {
      if (el.innerText.trim()) {
        articleText += el.innerText + '\n\n';  // Append text with spacing
      }
    });

    // Save article content to LocalStorage
    localStorage.setItem('savedArticle', articleText.trim());

    console.log('Article saved to LocalStorage:', articleText);

    // Restore hidden elements to original styles
    originalStyles.forEach(item => {
      item.element.style.display = item.display;  // Restore original display
    });

    alert('Article content saved to LocalStorage!');
  }, 1000);  // 1-second delay for dynamic content loading
}
