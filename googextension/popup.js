document.getElementById('copyText').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: saveArticleToFile
      }
    );
  });
});

function saveArticleToFile() {
  // Find the main article element using <article> or common article class names
  let article = document.querySelector('article, .article-body, .content-article, .post-content, .entry-content, .main-content');

  // If no article is found, alert the user
  if (!article) {
    alert('No news article found on this page.');
    return;
  }

  // Remove any distracting or non-content elements within the article
  const selectorsToRemove = [
    'aside', 'footer', 'nav', 'header', 'form', 'button', 'script', 'style', 
    '.advertisement', '.related-links', '.comments', '.sidebar', 
    '.share-buttons', '.related-articles', 'img', 'video', '.subscribe-box'
  ];
  selectorsToRemove.forEach(selector => {
    let elements = article.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });

  // Filter to only grab the relevant content such as paragraphs (<p>) and headings
  const contentElements = article.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  let articleText = '';
  contentElements.forEach(el => {
    articleText += el.innerText + '\n\n';
  });

  // If the article text is too small, alert the user
  if (articleText.trim().length < 50) {
    alert('Could not extract the article content properly.');
    return;
  }

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
}
