import facebook from "./facebook.js";
import twitter from "./twitter.js";
import youtube from "./youtube.js";
import getSite from "./getSite.js";

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

  const site = getSite(window.location.host);
  if (site === "facebook") {
    initialize(facebook.init);
  } else if (site === "twitter") {
    initialize(twitter.init);
  } else if (site === "youtube") {
    initialize(youtube.init);
  }
}

init();
