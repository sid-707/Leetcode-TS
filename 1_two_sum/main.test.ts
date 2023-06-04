import { assertEquals } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { twoSum } from "./main.ts";

const tests = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    result: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    result: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    result: [0, 1],
  },
];

tests.forEach((test1) => {
  Deno.test(
    `When nums is [${test1.nums}] and target is ${test1.target}, result is [${test1.result}].`,
    () => {
      assertEquals(twoSum(test1.nums, test1.target), test1.result);
    }
  );
});
