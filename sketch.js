function setup() {
  noCanvas();

  // Buttons for each HTML file
  createButton('Claim Summary Overview')
    .mousePressed(() => loadIframe('ClaimSummary_Overview.html'));
  createButton('FNOL Step 1: Search or Create Policy')
    .mousePressed(() => loadIframe('FNOL_Step1_SearchOrCreatePolicy.html'));
  createButton('FNOL Step 2: Basic Info')
    .mousePressed(() => loadIframe('FNOL_Step2_BasicInfo.html'));

  // Iframe to load HTML files
  this.iframe = createIframe('ClaimSummary_Overview.html');
  this.iframe.style('width', '100%').style('height', '500px'); // Adjust size as needed
}

// Function to change the iframe src
function loadIframe(src) {
  this.iframe.attribute('src', src);
}

// Helper to create an iframe element
function createIframe(src) {
  const iframe = createElem('iframe');
  iframe.attribute('src', src);
  return iframe;
}
