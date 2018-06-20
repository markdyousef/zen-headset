import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import "jest-localstorage-mock";
global.fetch = require("jest-fetch-mock");

configure({ adapter: new Adapter() });
