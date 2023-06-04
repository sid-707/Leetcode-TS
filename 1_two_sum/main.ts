export function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map();

  let i: number;
  for (i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    const seenDifference = seen.get(difference);
    if (seenDifference !== undefined) return [seenDifference, i];

    seen.set(num, i);
  }

  return [];
}
