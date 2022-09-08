import optionsStorage from "./options-storage.js";

function instagramHideSuggestionsForYou(options) {
  Array.from(document.querySelectorAll("div"))
    .filter((el) => el.innerHTML.trim() === "Suggestions For You")
    .forEach((el) =>
      el?.parentElement?.parentElement?.parentElement.setAttribute(
        "data-mindback-display-none",
        options.instagramHideSuggestionsForYou
      )
    );
}

function instagramHideShorts(options) {
  document
    .querySelector('div[role="presentation"] ul li[style^="transform"]')
    ?.closest('div[role="presentation"]')
    ?.parentElement?.parentElement?.parentElement.setAttribute(
      "data-mindback-display-none",
      options.instagramHideShorts
    );
}
function instagramHideViewLikeCount(options) {
  Array.from(document.querySelectorAll("div"))
    .filter(
      (el) =>
        el.innerHTML.trim().endsWith("likes") ||
        el.innerHTML.trim().endsWith("views")
    )
    .forEach((el) =>
      el
        .closest("section")
        ?.setAttribute(
          "data-mindback-display-none",
          options.instagramHideViewLikeCount
        )
    );
}

function instagramHideViewAllComments(options) {
  Array.from(document.querySelectorAll("div"))
    .filter(
      (el) =>
        el.innerHTML.trim().startsWith("View all") ||
        el.innerHTML.trim().endsWith("comments")
    )
    .forEach((el) =>
      el
        .closest("a")
        ?.parentElement?.setAttribute(
          "data-mindback-display-none",
          options.instagramHideViewAllComments
        )
    );
}

async function init() {
  const options = await optionsStorage.getAll();

  instagramHideShorts(options);
  instagramHideSuggestionsForYou(options);
  instagramHideViewLikeCount(options);
  instagramHideViewAllComments(options);
}

export default {
  init,
};
