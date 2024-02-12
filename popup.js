document.getElementById("connectBtn").addEventListener("click", () => {
  // Send a message to the background script to initiate the VPN connection
  chrome.runtime.sendMessage({ type: "connect" });
  
});

document.getElementById("disconnectBtn").addEventListener("click", () => {
  // Send a message to the background script to disconnect the VPN
  chrome.runtime.sendMessage({ type: "disconnect" });
});
