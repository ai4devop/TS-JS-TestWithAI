# 💡 Exercice 2 - TDD

## 🎯 Solution description

In this solution folder, you will find a complete and functional version of the  `formatDate` function in the `utils.ts`. This function was developed following the principles of Test-Driven Development (TDD).

## 📝 Implemented features

### Basic Date Format

1. **Function input**: The `formatDate` function accapts a `Date` object as input.
2. **Function output**: The function returns a string representing the date in the `yyyy-mm-dd` format.

### Support for Geographical Regions

In addition to the basic date format, the function has been enhanced to handle different geographical regions. This allows returning a date format that corresponds to a specific region.

## Unit tests

Unit tests have been developed and include the following scenarios:

1. Verification that the function correctly returns the basic `yyyy-mm-dd` format..
2. Validation of the support for different formats based on specified geographical regions.

## Instructions for Technical Justification

1. **Verify Basic Functionality** : The internal logic of the function should satisfy the basic unit tests. Ensure that the date is correctly converted to a string in the `yyyy-mm-dd` formart. The corresponding code:

```bash
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
```

2. **Handle Geographical Regions** : The function should now be able to return the date formatted according to the requested geographical region with the addition of the new `locale: string` argument. For simplicity, we chose to verify the case for the France region with this condition:

```bash
if (locale === "fr-FR") {
    return `${day}/${month}/${year}`;
}
```

The unit tests verifying this logic are `formats date correctly as YYYY-MM-DD for en-US locale` and `formats date correctly as DD/MM/YYYY for fr-FR locale`

3. **Edge Effects** : We added the following check in `utils.ts` :

```bash
if (!date) {
    throw new Error("Date cannot be null");
}
```


This ensures that the input date is not null. If it is, an error is thrown. The corresponding test is added in the `utils.test.ts` file and is named `throws error if date is null`