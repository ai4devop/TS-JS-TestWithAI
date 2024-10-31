# 📝 Exercise 3 - Unit Testing + Mocking ~ 20 minutes

In this folder, you will find a `fetchData` function that simulates retrieving data from an API. This function and its unit tests currently lack error handling. This exercise aims to introduce mocking into your testing practices and challenge your generative AI on this topic. 

## 🎯 Objectives

### 1. Add Error Handling to `utils.ts`
- Modify the `fetchData` function to handle some API response errors and network errors.
- Use `try/catch` to capture errors and handle them appropriately with their statuses.

### 2. Add Unit Tests to `utils.test.ts`
- Add unit tests for the `fetchData` function in the `utils.test.ts` file.
- Use a mock to simulate an API call in your tests.
- Ensure to cover different test cases, including cases where the function successfully retrieves data, cases where it fails due to a network error, and cases where it fails due to an API response error.

### 🚀 How to Run the Tests
Run the command:

```bash
npm test
```

## ✅ Validation criteria :

- The written unit tests pass successfully.
- The tests cover the different statuses returned by an API with error handling?

**<u>Tips</u>** : 

- To mock a function, you can use `jest.fn()` or `jest.mock()` to create a mock function:

```bash
jest.mock("./utils", () => ({
  fetchData: jest.fn(),
}));

```
