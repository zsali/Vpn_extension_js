// Handle messages from the extension's popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "connect") {
    console.log("click");
    // Handle VPN connection logic here
  } else if (message.type === "disconnect") {
    // Handle VPN disconnection logic here
  }
});
