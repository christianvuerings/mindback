import facebook from "./facebook.js";
import twitter from "./twitter.js";
import youtube from "./youtube.js";

function initializeObserver(callback) {
  const interval = setInterval(() => {
    if (typeof document !== "undefined" && document?.body) {
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

function initialize(callback) {
  chrome.storage.onChanged.addListener(callback);
  initializeObserver(callback);
}

async function init() {
  console.log("Content script loaded for", chrome.runtime.getManifest().name);

  const { host } = window.location;
  if (host.includes("facebook.com")) {
    initialize(facebook.init);
  } else if (host.includes("twitter.com")) {
    initialize(twitter.init);
  } else if (host.includes("youtube.com")) {
    initialize(youtube.init);
  }
}

init();
