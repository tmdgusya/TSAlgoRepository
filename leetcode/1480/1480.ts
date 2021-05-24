const nums: number[] = [1, 1, 1, 1, 1];
const result: number[] = [1, 2, 3, 4, 5];

function runningSum(nums: number[]): number[] {
  const result: number[] = [];

  const i: number = nums[0];

  result.push(i);

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
}
