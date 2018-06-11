const fetch = require("node-fetch");

const fetchStory = id => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => res.json())
    .catch(err => console.log(err));
};
exports.fetchStory = fetchStory;

exports.fetchStoryHTML = async id => {
  const story = await fetchStory(id);
  const res = await fetch(story.url);
  const html = await res.text();

  return html;
};

exports.fetchStories = async (type = "topstories", count = 10) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);
  const storyIds = await res.json();

  // limit fetch to {count}
  const popIds = storyIds.slice(0, count);
  const stories = await Promise.all(popIds.map(id => fetchStory(id)));
  return stories;
};
