/**
 * This works like map but removes all the non-truthy values from the resulting array
 * @param {[any]} list
 * @param {function} mapper
 * @returns {[any]}
 */
export function keep(list, mapper) {
  let reducer = (acc, entry) => {
    let result = mapper(entry);
    if (result) {
      acc.push(result);
    }
    return acc;
  };
  return list.reduce(reducer, []);
}
/**
 * This works like filter, but returns the first truthy return value instead
 * @param {[any]} list
 * @param {function} matcher
 * @returns {any}
 */
export function some(list, matcher) {
  for (let i = 0; i < list.length; i++) {
    let result = matcher(list[i]);
    if (result) {
      return result;
    }
  }
  return null;
}

export function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const charCodeZero = "0".charCodeAt(0);
const charCodeNine = "9".charCodeAt(0);

export function isDigit(char) {
  if (typeof char != "string" || char.length != 1) {
    return false;
  }
  let charCode = char.charCodeAt(0); // for identifying if presentChar is an integer
  return charCode >= charCodeZero && charCode <= charCodeNine;
}

export function isInteger(n) {
  return typeof n === "number";
}

const charCodea = "a".charCodeAt(0);
const charCodez = "z".charCodeAt(0);
const charCodeA = "A".charCodeAt(0);
const charCodeZ = "Z".charCodeAt(0);

export function isLetter(char) {
  if (typeof char != "string" || char.length != 1) {
    return false;
  }
  let charCode = char.charCodeAt(0);
  return (
    (charCode >= charCodea && charCode <= charCodez) ||
    (charCode >= charCodeA && charCode <= charCodeZ)
  );
}

export function isString(str) {
  return typeof str === "string";
}

export function removeAllOccurrences(inputString, keywords) {
  if (!inputString) {
    return inputString;
  }

  return keywords.reduce((acc, key) => {
    return acc.replace(key, "");
  }, inputString);
}
