document.getElementById("downloadButton").addEventListener("click", function () {
    chrome.runtime.sendMessage({});
});
