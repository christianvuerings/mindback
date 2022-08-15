import optionsStorage from "./options-storage.js";

console.log("💈 Content script loaded for", chrome.runtime.getManifest().name);

const translations = {
  unreadItems: ["unread items", "ongelezen items"],
};

function initTwitter(options) {
  if (options.twitterHideTimelineCounts) {
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
      .map((el) => el.closest("a").style.setProperty("display", "none"));
  }

  if (options.twitterHideTimelineCounts) {
    Array.from(
      document.querySelectorAll('[data-testid="app-text-transition-container"]')
    ).forEach((el) =>
      el.parentElement.style.setProperty("visibility", "hidden")
    );
  }
  if (options.twitterHideNotificationsBadge) {
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
      .forEach((el) => el.style.setProperty("display", "none"));
  }
  if (options.twitterHideHomeBadge) {
    Array.from(
      document.querySelectorAll(
        translations.unreadItems
          .map((item) => `[aria-label*="${item}"]`)
          .join(",")
      )
    )
      .filter((el) =>
        ["Home", "Startpagina"].some((item) =>
          el.parentElement.parentElement.textContent.includes(item)
        )
      )
      .forEach((el) => el.style.setProperty("display", "none"));
  }
  if (options.twitterHideRelevantPeopleSection) {
    document
      .querySelector('[aria-label="Relevant people"]')
      ?.parentElement.style.setProperty("display", "none");
  }
  if (options.twitterHideWhatsHappeningSection) {
    document
      .querySelector(
        ["Timeline: Trending now", "Tijdlijn: Nu populair"]
          .map((item) => `[aria-label="${item}"]`)
          .join(",")
      )
      .parentElement.style.setProperty("display", "none");
  }
  if (options.twitterHideWhoToFollowSection) {
    document
      .querySelector(
        ["Who to follow", "Wie te volgen"]
          .map((item) => `[aria-label="${item}"]`)
          .join(",")
      )
      ?.parentElement.style.setProperty("display", "none");
  }
  if (options.twitterHideSignUpSection) {
    document
      .querySelector('[aria-label="Sign up"]')
      ?.parentElement.style.setProperty("display", "none");
  }
  if (options.twitterHideSeeMoreTweetsModal) {
    const foundSeeMoreTweets = Array.from(
      document.querySelectorAll('[role="dialog"]')
    )
      .filter((el) => el.textContent.includes("See more Tweets from"))
      .map((el) => el.style.setProperty("display", "none"));
    if (foundSeeMoreTweets.length > 0) {
      document.querySelector("html").style.setProperty("overflow", null);
    }
  }
  if (options.twitterHideCookiebar) {
    Array.from(document.querySelectorAll('[data-testid="BottomBar"]'))
      .filter((el) => el.textContent.toLowerCase().includes("cookie"))
      .map((el) => el.style.setProperty("display", "none"));
  }
}

async function init() {
  const options = await optionsStorage.getAll();
  setInterval(() => {
    initTwitter(options);
  }, 100);
}

init();
