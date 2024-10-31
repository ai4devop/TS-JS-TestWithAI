# 📝 Exercise1 - Unit Tests ~ 20 minutes

In this folder, you will find two important functions in the `utils.ts` file:

- The `reverseString` function, which reverses a string of characters.
- The `isPalindromeRecursive` function, which recursively checks if a string is a palindrome, meaning it reads the same forwards and backwards.

The main goal is to see if your generative AI assistant can help you write comprehensive unit tests in the `utils.test.ts` file and ensure they work correctly by running the command:

```bash
npm test
```

## 🎯 Objective

1. **Test generation** : Use your AI assistant to suggest a suite of unit tests for the `reverseString` and `isPalindromeRecursive` functions.

   - For `reverseString`, the function should ordinarily reverse strings.
    - Pour `isPalindromeRecursive`, the function should check if a string is a palindrome. Test it with:
        - Simple palindromes (e.g., "racecar", "radar").
        - Strings that are not palindromes (e.g., "hello", "world").
        - Empty strings or strings with a single character.
        - Strings with spaces or special characters (consider phrases like "A man, a plan, a canal, Panama").
        - Handle cases where the input is `null` or `undefined` by verifying that the function throws an error.

2. **Review and Adjustment** :

   - Analyze the generated tests to ensure their relevance and completeness.
   - Manually adjust the tests if necessary to cover specific cases:
        - `reverseString` : special characters, empty string, spaces, handling of null or undefined.
        - `isPalindromeRecursive` : simple character strings, palindromes of different lengths, non-palindromes, handling of null or undefined.

3. **Execution and validation** :

   - Execute `npm test` to verify that all tests pass successfully.
   - In case of errors, diagnose the problem to determine if the error comes from incorrect logic in the function or a failure in the test itself.


### Tips

Use the command  `@Terminal` via Continue when you encounter errors during test execution.

---

## 🚀 How to run tests

Run the command:

```bash
npm test
```

## ✅ Validation criteria
- All written unit tests succeed.
- Edge cases (e.g., a null string, an empty string, etc.) are well covered.
