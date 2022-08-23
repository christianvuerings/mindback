import twitter from "./twitter.js";
import youtube from "./youtube.js";

function initializeObserver(callback) {
  const interval = setInterval(() => {
    if (typeof document !== "undefined") {
      callback();
      const observer = new MutationObserver(callback);

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
      clearInterval(interval);
    }
  }, 1);
}

async function init() {
  console.log("Content script loaded for", chrome.runtime.getManifest().name);

  const location = window.location.href;
  if (location.includes("twitter.com")) {
    chrome.storage.onChanged.addListener(twitter.init);
    initializeObserver(twitter.init);
  } else if (location.includes("youtube.com")) {
    chrome.storage.onChanged.addListener(youtube.init);
    initializeObserver(youtube.init);
  }
}

init();
