const { test, expect } = require("@jest/globals");
const { normaliseURL } = require("./crawl.js");

test("normaliseURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normaliseURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normaliseURL strip protocol", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normaliseURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});
