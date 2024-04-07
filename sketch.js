function setup() {
  noCanvas();
  
  // Create the iframe initially without loading a specific page
  this.iframe = createIframe('');
  this.iframe.style('width', '60%').style('height', '500px'); // Example styling
  
  // Create buttons
  createButton('Claim Summary Overview').mousePressed(() => loadIframe('ClaimSummary_Overview.html'));
  createButton('FNOL Step 1: Search or Create Policy').mousePressed(() => loadIframe('FNOL_Step1_SearchOrCreatePolicy.html'));
  createButton('FNOL Step 2: Basic Info').mousePressed(() => loadIframe('FNOL_Step2_BasicInfo.html'));
}

function loadIframe(src) {
  this.iframe.attribute('src', src);
}

function createIframe(src) {
  const iframe = createElement('iframe');
  iframe.attribute('src', src);
  return iframe;
}



