/**
 * Get the site based on a URL
 * @returns string site: 'facebook' | 'twitter' | 'youtube'
 */
export default function site(url /*: string */) {
  if (url.includes("facebook.com")) {
    return "facebook";
  } else if (url.includes("twitter.com")) {
    return "twitter";
  } else if (url.includes("youtube.com")) {
    return "youtube";
  }

  return null;
}
