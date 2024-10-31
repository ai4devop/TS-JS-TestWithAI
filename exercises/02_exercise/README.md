# 📝 Exercise2 - TDD ~ 20 minutes

In this folder, you will find a `formatDate` function added to the `utils.ts` file. This function currently has no logic, only comments. The developer has chosen to start by writing unit tests (TDD). These basic unit tests should help you implement the internal logic of the `formatDate` function. Another use case is planned to test this function: we would like to return the date format based on the geographical region.

## 🐾 Steps

Initially, the goal is to conform to the two implemented unit tests. To achieve this, you must:

- Accept the Date format as input in the `formatDate` function.
- Return the date in string format.
- Return this string in the format yyyy-mm-dd.

In the second phase, you will need to improve the `formatDate` function to handle different geographical regions:

- implement this feature in the `formatDate` function.
- Add unit tests to verify that the function correctly handles different geographical regions.

You will have completed this exercise when:

- The internal logic of the `formatDate` function is implemented (return the requested date format).
- The unit tests pass.
- The internal logic of the function allows managing different geographical regions.
- The unit tests verify the implementation of handling different geographical regions.

## 🚀 How to Run the Tests

Run the command:

```bash
npm test
```

## ✅ Validation Criteria
- All written unit tests succeed.
- Edge cases are well covered for both local and foreign date formats.