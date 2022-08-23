import OptionsSync from "webext-options-sync";

export default new OptionsSync({
  defaults: {
    // Counts
    twitterHideFollowingFollowersCounts: true,
    twitterHideNoticiationsTitleCount: true,
    twitterHideTimelineCounts: true,
    // Badges
    twitterHideFaviconBadge: true,
    twitterHideNotificationsBadge: true,
    twitterHideHomeBadge: true,
    // Sections
    twitterHideRelevantPeopleSection: true,
    twitterHideSignUpSection: true,
    twitterHideWhatsHappeningSection: true,
    twitterHideWhoToFollowSection: true,
    // Modals
    twitterHideSeeMoreTweetsModal: true,
    twitterHideSeeWhatsHappeningModal: true,
    // Bars
    twitterHideCookiebar: true,
    // Promoted
    twitterHidePromotedTweets: true,

    // Feeds
    youtubeHideHomeFeed: true,
  },
  migrations: [OptionsSync.migrations.removeUnused],
  logging: true,
});
