// get top stories from HackerNews API
export const getStories = async (type = "topstories", count = 10) => {
  const res = await fetch("/api/discover");
  const stories = await res.json();
  return stories.data;
};

export const getStoryHTML = async id => {
  const res = await fetch(`/api/discover/${id}`);
  const html = await res.text();
  return html;
};
