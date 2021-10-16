import * as utils from "../src/array_utils.js";
import * as assert from "assert";

test("Test keep", () => {
  let mapperFn = (a) => {
    if (typeof a === "number") {
      return a + 5;
    }
  };
  assert.ok(
    utils.arrayEquals(utils.keep([1, "1", 2, "two", 4], mapperFn), [6, 7, 9])
  );
});

test("Test some", () => {
  let mapperFn = (a) => {
    if (typeof a === "number") {
      return a + 5;
    }
  };
  assert.ok(utils.some([1, "1", 2, "two", 4], mapperFn) === 6);
});
