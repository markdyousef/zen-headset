const { fetchStory, fetchStoryHTML, fetchStories } = require("./discover-data");

const STORY_ID = 17286770;
describe("UNIT TEST - actions.discoverData", () => {
  test("fetchStory(id)", done => {
    fetchStory(STORY_ID).then(res => {
      expect(res).toMatchObject({ by: "typpo" });
      done();
    });
  });
  test("fetchStoryHTML(storyId)", done => {
    fetchStoryHTML(STORY_ID).then(html => {
      expect(html).toBeDefined();
      done();
    });
  });
  test("fetchStories() should return 100 topStories", done => {
    fetchStories().then(stories => {
      expect(stories.length).toBe(100);
      done();
    });
  });
});
