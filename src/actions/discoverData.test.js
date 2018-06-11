const { fetchStory, fetchStoryHTML, fetchStories } = require("./discoverData");

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
  test("fetchStories() should return 10 topStories", done => {
    fetchStories().then(stories => {
      expect(stories.length).toBe(10);
      done();
    });
  });
});
