import OptionsSync from "webext-options-sync";

export default new OptionsSync({
  defaults: {
    // Counts
    twitterHideFollowingFollowersCounts: true,
    twitterHideTimelineCounts: true,
    // Badges
    twitterHideNotificationsBadge: true,
    twitterHideHomeBadge: true,
    // Sections
    twitterHideRelevantPeopleSection: true,
    twitterHideSignUpSection: true,
    twitterHideWhatsHappeningSection: true,
    twitterHideWhoToFollowSection: true,
    // Modals
    twitterHideSeeMoreTweetsModal: true,
    // Bars
    twitterHideCookiebar: true,
    // Promoted
    twitterHidePromotedTweets: true,
  },
  migrations: [OptionsSync.migrations.removeUnused],
  logging: true,
});
