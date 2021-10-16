import * as utils from "../src/string_utils.js";
import * as assert from "assert";

test("removeAllOccurrences test", async () => {
  let result1 = utils.removeAllOccurrences(
    "<![CDATA[This is the very first post]]> https://exmaple.com",
    [/<!\[CDATA\[/g, /\]\]\>/g]
  );
  let result2 = utils.removeAllOccurrences(
    "This is the very first post https://exmaple.com",
    [/<!\[CDATA\[/g, /\]\]\>/g]
  );
  let result3 = utils.removeAllOccurrences("Sample String", [/Sample/]);
  assert.ok(result1 === "This is the very first post https://exmaple.com");
  assert.ok(result2 === "This is the very first post https://exmaple.com");
  assert.ok(result3 === " String");
});

