# Testing ~45 minutes

## 🛠️ How to use this repository 

To clone this project, open your terminal command with in the folder place you want to place this lab and use the following command:

```bash
git clone --branch main-en https://github.com/ai4devop/TS-JS-TestWithAI.git
```

Then install all the needed dependencies :

```bash
npm install
```

## Goal
The purpose of this exercise is to discover how to use AI tools to assist you in practicing test-driven development.

As a reminder, test-driven development (TDD) involves writing unit tests before the actual code is created. Writing these tests helps define the expected behavior of the functions. Once the code is written, the tests can be run to validate the behavior.

In this exercise, you will find the `utils` class, which aims to provide utility functions for processing dates with or without times. You will be required to write tests for the functions we want to implement and then the code for the functions.

### Instructions

- Clone this project.
- Go to the u`utils` file to review the created method skeletons and to utils.test to see the implemented tests.
- Realize the differents implementations described
- Launch tests

### 1. TDD - Write function from tests
For the first part of this exercise, we will write functions for processing `Date`. In the `utils.test` class, a series of unit tests have been written that dictate the expected behavior of 3 functions. You will now need to rely on these unit tests to write the code for these functions.

- **Implement the function `formatDate(LocalDate date)`** :
   - From test `testFormatDate_ValidDate` already written in `utils.test`
   - This function must accept the object `Date` and return `String` with the format `yyyy-mm-dd`.

- **Implement the function `parseDate(String date)`** :
   - From test `testParseDate_ValidDate` already written in `utils.test`
   - This function must accept `String` with the format `yyyy-mm-dd` and return an object `Date`.

- **Implement the function `formatDateWithPattern(LocalDate date, String pattern)`** :
   - From test `testFormatDate_WithPattern` already written in `utils.test`
   - This function must accept and object `Date` and a `String` which will contains the date pattern expected, ex : 'yyyy-mm-dd' and return a `String` with the date with the expected format


### 2. Write unit test by description
For the second part of the exercise, we will tackle `Date` objects. This time, you will need to write tests that will dictate the behavior of the functions, and then proceed with writing the functions.

- **For the function `formatDateTime(Date dateTime)`** :
   - Describe a first test `testFormatDateTime_ValidDateTime` which will verify that for a given `Date`, the function `formatDateTime` return a string, _ex : "2024-08-31T08:46:00"_
   - This test will obviously fail cause the function is not yet implemented
   - When the test have been made, you can generate the code for the function `formatDateTime(Date dateTime)`
   - Make sure that the test you wrote now passes

- **For the function `parseDateTime(String dateTimeString)`** :
   - Rédigez un premier test `testParseDateTime_ValidDateTime` qui vérifiera que pour une `String` donnée, au format yyyy-MM-ddThh:mm:ss,  la fonction `parseDateTime` retourne bien un objet `Date`, _ex : "2024-08-31T08:46:00"_
   - Rédigez un deuxième test `testParseDateTime_InvalidDateTime` qui vérifiera que pour une `String` pas au format yyyy-MM-ddThh:mm:ss, la fonction `formatDateTime` échoue bien avec une exception `DateTimeParseException`, _ex : "invalid-date"_
   - Ces tests échoueront bien sûr car la fonction appelée n'est pas encore implémentée
   - Une fois les tests rédigés, vous pouvez vous attaquer à la rédaction de fonction `parseDateTime(String dateTimeString)`
   - Assurez vous que les tests que vous avez rédigés passent maintenant
   
   - Describe a first test `testParseDateTime_ValidDateTime` which will verify that for a given `String`, with a given format yyyy-MM-ddThh:mm:ss_, the function `parseDateTime` return an object `Date`, _ex : "2024-08-31T08:46:00"_
   - Describe a second test `testParseDateTime_InvalidDateTime` which will verify that for a given `String` NOT in a format yyyy-MM-ddThh:mm:ss, the function `formatDateTime` will fail with with the exception `DateTimeParseException`, _ex : "invalid-date"_
   - This test will obviously fail cause the function is not yet implemented
   - When the test have been made, you can generate the code for the function `parseDateTime(String dateTimeString)`
   - Make sure that the test you wrote now passes

### 3. Write unit test by code
For this final part of the exercise, we will tackle the Testing block, which will allow you to write unit tests based on given code.
- **For the function `formatDateTime(Date dateTime, String pattern)`** :
   - The unit test in `testFormatDateTime_WithPattern` will verify that for a given `Date` and a chosen pattern, the function `formatDateTime` return a string with the given format, _ex : avec dd/MM/yyyy HH:mm:ss on a "31/08/2024 08:46:00"_
   - The code is already written, use it to generate your test with AI
   


### How to test :

1. Execute test with :

```bash
npm test
```

2. Be sure all tests pass before saving your solution.

### Validation criteria :

- Functions that process `Date` are written and all tests pass.
