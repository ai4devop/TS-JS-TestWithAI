# 💡 Exercise 1 - Unit Tests

## 🎯 Objectives

This solution implements the handling of several cases that could be edge effects or simply a check of the internal logic of the function:

- `reverses a string correctly` > internal logic
- `returns an empty string if the input is an empty string` > internal logic
- `should reverse a string with one character` > internal logic
- `should reverse a string with spaces` > internal logic
- `should reverse a string with special characters` > internal logic
- `throws error if input is null` > edge case
- `throws error if input is undefined` > edge case

The last two tests led us to improve our function by adding a check for `null` and `undefined` values.

## Addition of the `isPalindromeRecursive` function

The `isPalindromeRecursive` function checks recursively if a string is a palindrome, meaning it reads the same forwards and backwards. The function uses `reverseString` o reverse certain substrings during the verification process. It handles several cases:

- Simple palindromic strings (e.g., "racecar", "radar")
- Strings that are not palindromes (e.g., "hello", "world")
- Empty strings or strings with a single character
- Cases where the input is `null` or `undefined` (throws an error)

Here are some unit tests that validate the behavior of `isPalindromeRecursive` :

- `returns true for a single character` > simple palindrome
- `returns true for an empty string` > empty palindrome
- `returns true for a simple palindrome` > classic palindrome
- `returns false for a non-palindrome` > non-palindrome
- `returns false for a palindrome with special characters` > special character handling not covered
- `returns true for a palindrome without special characters` > handling of palindrome without special characters
- `throws error if input is null` > edge case
- `throws error if input is undefined` > edge case

### 🚀 How to run tests

Run the command :

```bash
npm test
```

### Bonus - Improvement for Special Characters

Currently the `isPalindromeRecursive` function does not handle spaces, commas, or other special characters. If you want to go further and optimize the function to handle phrases like "A man, a plan, a canal, Panama", you can try to ignore these characters during the palindrome verification.
