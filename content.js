function getInfo() {
    var pageTitle = document.title;
    var metaTags = Array.from(document.querySelectorAll('meta'));
    var lang = document.documentElement.lang || '';
    
    var infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'extension-info');
    infoDiv.style.position = 'fixed';
    infoDiv.style.top = '0';
    infoDiv.style.right = '0';
    infoDiv.style.backgroundColor = 'white';
    infoDiv.style.padding = '10px';
    infoDiv.style.border = '1px solid #ccc';
    infoDiv.style.zIndex = '9999';
    
    var infoText = `<p><strong>Website:</strong> ${document.location.hostname}</p>`;
    infoText+=`<p><strong>Title:</strong> ${pageTitle}</p>`;
    infoText += `<p><strong>Language:</strong> ${lang}</p>`;
    infoText += '<p><strong>Meta Tags:</strong></p>';
    
    metaTags.forEach((tag) => {
      var name = tag.getAttribute('name') || tag.getAttribute('property');
      var content = tag.getAttribute('content');
      if (name && content) {
        infoText += `<p>${name}: ${content}</p>`;
      }
    });
    
    infoDiv.innerHTML = infoText;
    document.body.appendChild(infoDiv);
  }
  
  function removeInfoDiv() {
    var infoDiv = document.getElementById('extension-info');
    if (infoDiv) {
      infoDiv.remove();
    }
  }
  
  document.addEventListener('click', function (event) {
    var popup = document.getElementById('extension-info');
    if (popup && !popup.contains(event.target)) {
      removeInfoDiv();
    }
  });
  
  // This function is executed only when called from the popup script
  function closePopup() {
    removeInfoDiv();
  }