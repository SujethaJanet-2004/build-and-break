const challenges = [
  {
    id: 1,
    title: "Fix Add Function",
    description: "Fix the indentation bug in the add function.",
    starterCode: `def add(a, b):\nreturn a + b`,
    solutionSnippet: "    return a + b",
    difficulty: "Easy",
    language: "python"
  },
  {
    id: 2,
    title: "Reverse String Bug",
    description: "Reverse the string without using slicing.",
    starterCode: `def reverse(s):\nres = ''\nfor c in s:\nres = c + res\nreturn res`,
    solutionSnippet: "res = c + res",
    difficulty: "Medium",
    language: "python"
  },
  {
    id: 3,
    title: "Find Max in Array",
    description: "Fix the logic to return the maximum element.",
    starterCode: `def find_max(arr):\nmax_val = 0\nfor num in arr:\n    if num > max_val:\n        max_val = num\nreturn max_val`,
    solutionSnippet: "max_val = arr[0]",
    difficulty: "Hard",
    language: "python"
  },
  {
    id: 4,
    title: "Check Palindrome",
    description: "Fix the logic to correctly check if a string is a palindrome.",
    starterCode: `def is_palindrome(s):\n    return s == s[::-1]`,
    solutionSnippet: "s == s[::-1]",
    difficulty: "Easy",
    language: "python"
  },
  {
    id: 5,
    title: "Fibonacci Generator",
    description: "Fix the logic to return the first n Fibonacci numbers.",
    starterCode: `def fibonacci(n):\n    seq = [0, 1]\n    for i in range(2, n):\n        seq.append(seq[-1] + seq[-2])\n    return seq`,
    solutionSnippet: "seq[-1] + seq[-2]",
    difficulty: "Easy",
    language: "python"
  },
  {
    id: 6,
    title: "Missing Number",
    description: "Find the missing number from a list of 0 to n.",
    starterCode: `def missing_number(nums):\n    n = len(nums)\n    return n*(n+1)//2 - sum(nums)`,
    solutionSnippet: "n*(n+1)//2 - sum(nums)",
    difficulty: "Medium",
    language: "python"
  },
  {
    id: 7,
    title: "Two Sum Problem",
    description: "Fix the logic to return indices of two numbers that add up to target.",
    starterCode: `def two_sum(nums, target):\n    for i in range(len(nums)):\n        for j in range(i+1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]`,
    solutionSnippet: "nums[i] + nums[j] == target",
    difficulty: "Medium",
    language: "python"
  },
  {
    id: 8,
    title: "Valid Parentheses",
    description: "Check if the parentheses are valid in a string.",
    starterCode: `def is_valid(s):\n    stack = []\n    mapping = {')': '(', ']': '[', '}': '{'}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack`,
    solutionSnippet: "return not stack",
    difficulty: "Hard",
    language: "python"
  },
  {
    id: 9,
    title: "Anagram Checker",
    description: "Fix the function to check if two strings are anagrams.",
    starterCode: `def is_anagram(s, t):\n    return sorted(s) == sorted(t)`,
    solutionSnippet: "sorted(s) == sorted(t)",
    difficulty: "Easy",
    language: "python"
  },
  {
    id: 10,
    title: "Rotate Array",
    description: "Fix the function to rotate the array to the right by k steps.",
    starterCode: `def rotate(nums, k):\n    k = k % len(nums)\n    nums[:] = nums[-k:] + nums[:-k]`,
    solutionSnippet: "nums[:] = nums[-k:] + nums[:-k]",
    difficulty: "Medium",
    language: "python"
  }
];

export default challenges;

