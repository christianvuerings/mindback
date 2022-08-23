import optionsStorage from "./options-storage.js";

function youtubeHideHomeFeed(options) {
  document.documentElement.setAttribute(
    "data-mindback-youtube-hide-home-feed",
    options.youtubeHideHomeFeed
  );
}

async function init() {
  const options = await optionsStorage.getAll();

  youtubeHideHomeFeed(options);
}

export default {
  init,
};
