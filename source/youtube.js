import optionsStorage from "./options-storage.js";

function youtubeHideHomeFeed(options) {
  document.documentElement.setAttribute(
    "data-mindback-youtube-hide-home-feed",
    options.youtubeHideHomeFeed
  );
}

function youtubeHideShortsTab(options) {
  Array.from(
    document.querySelectorAll('.yt-simple-endpoint[title="Shorts"]')
  ).forEach((el) => {
    el.setAttribute("data-mindback-display-none", options.youtubeHideShortsTab);
  });
}

function youtubeHideVideoSidebar(options) {
  document
    .querySelector("#secondary.ytd-watch-flexy")
    ?.setAttribute(
      "data-mindback-display-none",
      options.youtubeHideVideoSidebar
    );
}

function youtubeHideComments(options) {
  Array.from(
    document.querySelectorAll(
      "#comment-teaser, #comments, ytm-comment-section-renderer, ytm-comments-entry-point-header-renderer, ytm-engagement-panel"
    )
  ).forEach((el) => {
    el.setAttribute("data-mindback-display-none", options.youtubeHideComments);
  });
}

function youtubeHideLikeCount(options) {
  document
    .querySelector(
      "ytd-toggle-button-renderer .ytd-toggle-button-renderer[aria-label]"
    )
    ?.setAttribute(
      "data-mindback-display-none",
      options.youtubeHideVideoSidebar
    );
}

function youtubeHideSubscriptionBadges(options) {
  Array.from(document.querySelectorAll("#newness-dot")).forEach((el) => {
    el.setAttribute(
      "data-mindback-display-none",
      options.youtubeHideSubscriptionBadges
    );
  });
}

function youtubeHideAutoplay(options) {
  Array.from(
    document.querySelectorAll(
      ".autonav-endscreen, button[data-tooltip-target-id='ytp-autonav-toggle-button'], ytd-watch-flexy:not([playlist]) .ytp-chrome-controls .ytp-next-button, .player-controls-middle > button:not(.player-control-play-pause-icon), .ytm-autonav-bar, .ytm-autonav-toggle-button-container"
    )
  ).forEach((el) => {
    el.setAttribute("data-mindback-display-none", options.youtubeHideAutoplay);
  });
}

function youtubeHideEndscreenFeed(options) {
  Array.from(
    document.querySelectorAll(
      " .html5-endscreen:not(.mweb-endscreen), .ytp-mweb-endscreen-play-next, .ytp-mweb-endscreen-play-previous"
    )
  ).forEach((el) => {
    el.setAttribute(
      "data-mindback-display-none",
      options.youtubeHideEndscreenFeed
    );
  });
}

async function init() {
  const options = await optionsStorage.getAll();

  youtubeHideHomeFeed(options);
  youtubeHideShortsTab(options);
  youtubeHideVideoSidebar(options);
  youtubeHideComments(options);
  youtubeHideLikeCount(options);
  youtubeHideSubscriptionBadges(options);
  youtubeHideAutoplay(options);
  youtubeHideEndscreenFeed(options);
}

export default {
  init,
};
