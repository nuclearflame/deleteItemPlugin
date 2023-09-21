let clickedElement = null; // Declare the clickedElement variable in the same scope

document.addEventListener("contextmenu", function(event) {
  if (clickedElement) {
    clickedElement.style.border = "";
  }
  // Store the clicked element when the context menu is triggered
  clickedElement = event.target;
  clickedElement.style.border = "2px solid red";

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "contextMenuItemClicked") {
      // Handle the context menu item click in your content script
      // Add your code here
      console.log("Test");
      console.log(clickedElement);
  
      // Remove the clicked element
      clickedElement.remove();
  
      console.log("Element removed");
    }
  });
});

document.addEventListener("click", function(event) {
  if (clickedElement) {
    // Remove the border when clicking somewhere else
    clickedElement.style.border = "";
    clickedElement = null;
  }
});