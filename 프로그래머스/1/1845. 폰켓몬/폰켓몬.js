function solution(nums) {
  const numSetArr = [...new Set(nums)];
  return numSetArr.length < nums.length / 2 ? numSetArr.length : nums.length / 2;
}