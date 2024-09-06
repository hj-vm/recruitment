import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchRssFeed(url) {
  const feed = await parser.parseURL(url);
  return feed.items;
}