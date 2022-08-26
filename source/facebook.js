import optionsStorage from "./options-storage.js";

function facebookHideNotificationsCount(options) {
  document
    .querySelector('div[aria-label^="Notifications,"]')
    ?.setAttribute(
      "data-mindback-display-none",
      options.facebookHideNotificationsCount
    );
}

function facebookHideNotificationsTitleCount(options) {
  if (options.facebookHideNotificationsTitleCount) {
    if (document.title.match(/^\(\d+\) /)) {
      document
        .querySelector("title")
        ?.setAttribute("data-original-title", document.title);
      document.title = document.title.replace(/^\(\d+\) /, "");
    }
  } else {
    const originalTitle = document
      .querySelector("title")
      ?.getAttribute("data-original-title", null);
    document.title = originalTitle ?? document.title;
  }
}

function facebookHideReactionCounts(options) {
  Array.from(
    document.querySelectorAll('[aria-label="See who reacted to this"]')
  ).forEach((el) =>
    el.nextElementSibling?.setAttribute(
      "data-mindback-display-none",
      options.facebookHideReactionCounts
    )
  );
}

function facebookHideGroupConversations(options) {
  Array.from(
    document.querySelectorAll('[data-visualcompletion="ignore-dynamic"]')
  )
    .filter((el) => el.textContent.trim().startsWith("Group conversations"))
    .forEach((el) => {
      el.setAttribute(
        "data-mindback-display-none",
        options.facebookHideGroupConversations
      );
    });
}

function facebookHideReelsAndShortVideos(options) {
  Array.from(document.querySelectorAll('div[role="article"]'))
    .filter((el) => el.textContent.includes("Reels and short videos"))
    .forEach((item) =>
      item.setAttribute(
        "data-mindback-display-none",
        options.facebookHideReelsAndShortVideos
      )
    );
}

async function init() {
  const options = await optionsStorage.getAll();

  facebookHideNotificationsCount(options);
  facebookHideNotificationsTitleCount(options);
  facebookHideReactionCounts(options);
  facebookHideGroupConversations(options);
  facebookHideReelsAndShortVideos(options);
}

export default {
  init,
};
