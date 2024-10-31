# 💡 Exercise 3 - Unit Testing + Mocking

This folder presents a solution for Exercise 3, which involves handling errors in a data-fetching function `fetchData` and writing its unit tests by simulating API calls.

## 🎯 Solution description

### Changes Made to  `utils.ts`

1. **Error handling** :
   - The `fetchData` function has been modified to include error handling.
   - The use of `try/catch` captures and manages errors related to API responses and network issues.
   - Errors are classified and handled based on their `mockStatusCode`  for appropriate management.

### Changes Made to `utils.test.ts`

2. **Unit Tests** :
   - Use of `jest.fn()` to simulate API calls and test various scenarios :
     - Successful data retrieval.
     - Failure due to a network error.
     - Failure due to an API response error.

## 💡 Technical Tips

- **Mocking** : To test asynchronous functions like `fetchData`we utilized Jest's mocking capabilities via `jest.fn()`. This allows us to isolate the function and call it with specific arguments to simulate different scenarios.

- **Error Handling** : Always separate types of errors (e.g., network error vs. API error) for more granular handling and better understanding of potential failures.

## ✅ Conclusion

This implementation illustrates how to robustly handle errors in an asynchronous environment and how to write effective unit tests using mocking.