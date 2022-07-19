chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    chrome.downloads.download(
        {
            url: "https://www.google.com",
            saveAs: false,
            method: "GET",
            filename: "index.html"
        });
});
