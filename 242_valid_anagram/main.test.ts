import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { validAnagram } from "./main.ts";

const tests = [
  {
    s: "anagram",
    t: "nagaram",
    result: true,
  },
  {
    s: "rat",
    t: "car",
    result: false,
  },
];

tests.forEach((test) => {
  Deno.test(
    `When s is "${test.s}" and t is "${test.t}", result is ${test.result}.`,
    () => {
      assertEquals(validAnagram(test.s, test.t), test.result);
    }
  );
});
