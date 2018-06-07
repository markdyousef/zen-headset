// get top stories from HackerNews API
export const getStories = async (type = "topstories", count) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);
  const storyIds = await res.json();

  function getStory(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  const stories = await Promise.all(storyIds.map(id => getStory(id)));
  return stories;
};
