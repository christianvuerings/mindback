import OptionsSync from "webext-options-sync";

export default new OptionsSync({
  defaults: {
    // Twitter: Counts
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
    // New Tweets
    twitterHideNewTweets: true,

    // Youtube
    // Feeds
    youtubeHideHomeFeed: true,
    // Tabs
    youtubeHideShortsTab: true,
    // Sidebar
    youtubeHideVideoSidebar: true,
    // Comments
    youtubeHideComments: true,
    // Like count
    youtubeHideLikeCount: true,
    // Subscription badges
    youtubeHideSubscriptionBadges: true,
    // Autoplay
    youtubeHideAutoplay: true,
    // End screen
    youtubeHideEndscreenFeed: true,
  },
  migrations: [OptionsSync.migrations.removeUnused],
  logging: true,
});
