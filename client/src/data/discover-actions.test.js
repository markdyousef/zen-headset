import {getStories} from './discover-actions';

describe("UNIT TESTS – discover-actions", () => {
    test("should get 10 topstories", done => {
        getStories().then(stories => {
            expect(stories.length).toBe(10);
            done();
        })
    })
})