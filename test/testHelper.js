import jsdom from "jsdom";

const { JSDOM } = jsdom;

const { window } = new JSDOM(
  "<!doctype html><html><body></body></html>",
  {
    url: "http://localhost"
  }
);

global.document = window.document;
global.window = window;

Object.keys(window).forEach(key => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
