import {getStories} from './discover-actions';
// https://www.npmjs.com/package/jest-fetch-mock
describe("UNIT TESTS – discover-actions", () => {
    xtest("should get 10 topstories", done => {
        getStories().then(stories => {
            expect(stories.length).toBe(10);
            done();
        })
    })
})