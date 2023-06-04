export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();

  let i: number;
  for (i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
