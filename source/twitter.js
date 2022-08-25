import optionsStorage from "./options-storage.js";

const translations = {
  unreadItems: ["unread items", "ongelezen items"],
};

function twitterHideFollowingFollowersCounts(options) {
  Array.from(document.querySelectorAll("span"))
    .filter(
      (el) =>
        // English
        el.textContent === "Following" ||
        el.textContent === "Followers" ||
        // Dutch
        el.textContent === "Volgend" ||
        el.textContent === "Volgers"
    )
    .map((el) =>
      el
        .closest("a")
        ?.setAttribute(
          "data-mindback-display-none",
          options.twitterHideFollowingFollowersCounts
        )
    );
}

function twitterHideNotificationsTitleCount(options) {
  if (options.twitterHideNoticiationsTitleCount) {
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

function twitterHideTimelineCounts(options) {
  Array.from(
    document.querySelectorAll('[data-testid="app-text-transition-container"]')
  ).forEach((el) =>
    el.parentElement.setAttribute(
      "data-mindback-visibility-hidden",
      options.twitterHideTimelineCounts
    )
  );
}

function twitterHideFaviconBadge(options) {
  const faviconSelector = document.querySelector("link[rel='shortcut icon']");
  if (options.twitterHideFaviconBadge) {
    const originalHref = faviconSelector?.getAttribute("href");
    if (originalHref.endsWith("-pip.2.ico")) {
      faviconSelector.setAttribute("data-original-href", originalHref);
      faviconSelector.setAttribute(
        "href",
        originalHref.replace(/-pip.2.ico$/, ".ico")
      );
    }
  } else {
    const originalHref = faviconSelector.getAttribute("data-original-href");
    if (originalHref) {
      faviconSelector.setAttribute("href", originalHref);
    }
  }
}

function twitterHideNotificationsBadge(options) {
  Array.from(
    document.querySelectorAll(
      translations.unreadItems
        .map((item) => `[aria-label*="${item}"]`)
        .join(",")
    )
  )
    .filter((el) =>
      ["Notifications", "Meldingen"].some((item) =>
        el.parentElement.parentElement.textContent.includes(item)
      )
    )
    .forEach((el) =>
      el.setAttribute(
        "data-mindback-display-none",
        options.twitterHideNotificationsBadge
      )
    );
}

function twitterHideHomeBadge(options) {
  Array.from(
    document.querySelectorAll(
      translations.unreadItems
        .map((item) => `[aria-label*="${item}"]`)
        .join(",")
    )
  )
    .filter((el) =>
      ["Home", "Startpagina"].some(
        (item) =>
          el?.parentElement?.parentElement.textContent.includes(item) ||
          el?.closest(`[aria-label*="${item}"]`)
      )
    )
    .forEach((el) =>
      el.setAttribute(
        "data-mindback-display-none",
        options.twitterHideHomeBadge
      )
    );
}

function twitterHideRelevantPeopleSection(options) {
  document
    .querySelector('[aria-label="Relevant people"]')
    ?.parentElement.setAttribute(
      "data-mindback-display-none",
      options.twitterHideRelevantPeopleSection
    );
}

function twitterHideWhatsHappeningSection(options) {
  document
    .querySelector(
      ["Timeline: Trending now", "Tijdlijn: Nu populair"]
        .map((item) => `[aria-label="${item}"]`)
        .join(",")
    )
    ?.parentElement.setAttribute(
      "data-mindback-display-none",
      options.twitterHideWhatsHappeningSection
    );
}

function twitterHideWhoToFollowSection(options) {
  document
    .querySelector(
      ["Who to follow", "Wie te volgen"]
        .map((item) => `[aria-label="${item}"]`)
        .join(",")
    )
    ?.parentElement.setAttribute(
      "data-mindback-display-none",
      options.twitterHideWhoToFollowSection
    );
}

function twitterHideSignUpSection(options) {
  document
    .querySelector('[aria-label="Sign up"]')
    ?.parentElement.setAttribute(
      "data-mindback-display-none",
      options.twitterHideSignUpSection
    );
}

function twitterHideSeeMoreTweetsModal(options) {
  const foundSeeMoreTweets = Array.from(
    document.querySelectorAll('[role="dialog"]')
  )
    .filter((el) => el.textContent.includes("See more Tweets from"))
    .map((el) =>
      el.setAttribute(
        "data-mindback-display-none",
        options.twitterHideSeeMoreTweetsModal
      )
    );
  if (options.twitterHideSeeMoreTweetsModal && foundSeeMoreTweets.length > 0) {
    document.querySelector("html")?.style.setProperty("overflow", null);
  }
}

function twitterHideSeeWhatsHappeningModal(options) {
  const foundSeeWhatsHappening = Array.from(
    document.querySelectorAll('[role="dialog"]')
  )
    .filter((el) => el.textContent.includes("See what’s happening"))
    .map((el) =>
      el.setAttribute(
        "data-mindback-display-none",
        options.twitterHideSeeWhatsHappeningModal
      )
    );
  if (
    options.twitterHideSeeWhatsHappeningModal &&
    foundSeeWhatsHappening.length > 0
  ) {
    document.querySelector("html")?.style.setProperty("overflow", null);
  }
}

function twitterHideCookiebar(options) {
  Array.from(document.querySelectorAll('[data-testid="BottomBar"]'))
    .filter((el) => el.textContent.toLowerCase().includes("cookie"))
    .map((el) =>
      el.setAttribute(
        "data-mindback-display-none",
        options.twitterHideCookiebar
      )
    );
}

function twitterHidePromotedTweets(options) {
  Array.from(document.querySelectorAll("span"))
    .filter((el) => el.textContent === "Promoted")
    .forEach((el) =>
      el
        .closest('[data-testid="cellInnerDiv"]')
        .setAttribute(
          "data-mindback-display-none",
          options.twitterHidePromotedTweets
        )
    );
}

function twitterHideNewTweets(options) {
  document
    .querySelector('[aria-label^="New Tweets are available"]')
    ?.setAttribute("data-mindback-display-none", options.twitterHideNewTweets);
}

async function init() {
  const options = await optionsStorage.getAll();

  twitterHideFollowingFollowersCounts(options);
  twitterHideNotificationsTitleCount(options);
  twitterHideTimelineCounts(options);
  twitterHideFaviconBadge(options);
  twitterHideNotificationsBadge(options);
  twitterHideHomeBadge(options);
  twitterHideRelevantPeopleSection(options);
  twitterHideWhatsHappeningSection(options);
  twitterHideWhoToFollowSection(options);
  twitterHideSignUpSection(options);
  twitterHideSeeMoreTweetsModal(options);
  twitterHideSeeWhatsHappeningModal(options);
  twitterHideCookiebar(options);
  twitterHidePromotedTweets(options);
  twitterHideNewTweets(options);
}

export default {
  init,
};
