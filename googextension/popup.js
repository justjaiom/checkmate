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
    // Selectors to temporarily hide instead of removing
    const selectorsToHide = [
      'aside', 'footer', 'nav', 'header', 'form', 'button', 'script', 'style', 
      '.advertisement', '.related-links', '.comments', '.sidebar', 
      '.share-buttons', '.related-articles', 'img', 'video', '.subscribe-box'
    ];

    // Store the original display values of elements
    const originalStyles = [];

    // Hide elements by setting their display to 'none'
    selectorsToHide.forEach(selector => {
      let elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        originalStyles.push({ element: el, display: el.style.display });  // Store the original display style
        el.style.display = 'none';  // Hide the element
      });
    });

    // Now select all paragraph elements <p> and headers for content extraction
    const contentElements = document.querySelectorAll('p');
    let articleText = '';

    contentElements.forEach(el => {
      // Ensure we only grab visible paragraphs and ignore empty ones
      if (el.innerText.trim()) {
        articleText += el.innerText + '\n\n';
        writeFile();
      }
    });

    // Create a Blob with the article text and trigger a download
    const blob = new Blob([articleText.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    async function writeFile() {
      // Create a new file handle
      const fileHandle = await window.showSaveFilePicker({
          suggestedName: 'bufferfile.txt.txt',
          types: [{
              description: 'Text Files',
              accept: {
                  'text/plain': ['.txt'],
              },
          }],
      });
  
      // Create a writable stream
      const writableStream = await fileHandle.createWritable();
  
      // Write text to the file
      await writableStream.write(articleText);
  
      // Close the file and write the contents to disk
      await writableStream.close();
  }
  
  // Call the function (e.g., on a button click)

  

    // Create a temporary anchor element to trigger the download
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = 'bufferfile.txt';  // Name the file "bufferfile.txt"
    // document.body.appendChild(link);
    // link.click();  // Programmatically click the link to trigger the download
    // document.body.removeChild(link);  // Remove the link after download
    // URL.revokeObjectURL(url);  // Revoke the object URL after the download

    console.log(articleText);

    // Restore the hidden elements to their original display styles
    originalStyles.forEach(item => {
      item.element.style.display = item.display;  // Restore original display style
    });

    alert('Article content saved to file!');
  }, 1000); // 1-second delay to wait for dynamic content
}
