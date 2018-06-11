// get top stories from HackerNews API
export const getStories = async (type = "topstories", count=10) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);
  const storyIds = await res.json();

  function getStory(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  // limit fetch to {count}
  const popIds = storyIds.slice(0, count)
  const stories = await Promise.all(popIds.map(id => getStory(id)));
  return stories;
};
