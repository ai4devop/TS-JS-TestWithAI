# 🧪 Producing Unit Tests with Generative AI

## 👀 Overview

This repository is designed to help developers practice and enhance their skills in implementing unit tests and test-driven development (TDD) using generative AI. Through practical exercises organized in directories, developers will explore how AI can assist in creating, refining, and optimizing unit tests in their daily projects.

## 👤 Audience

This repository is intended for developers of all levels who wish to integrate generative AI tools into their workflow, with a particular focus on unit testing and TDD practices.

## 🛠️ How to Use this Repository

The different exercises of this workshop are all located in the `exercises` directory, each with its own `README`. Each exercise is contained within a directory numbered incrementally (01, 02, 0n...), followed by the word `exercise`. For example, the first exercise is found in the `./exercises/01_exercise` directory. The solutions to the exercises are available in the `solution` directory.

To clone this project, use the following command:

```bash
git clone <TO ADD FINAL REPO URL>
```

Then navigate to the desired exercise directory:

```bash
cd ./exercises/01_exercise
```

Next, install the necessary dependencies:

```bash
npm install
```

Run the tests with:

```bash
npm test
```

Jest is the test framework used in this project. It is configured to automatically run tests when you execute the npm test command.

## 🧩 Exercises' structure
To work on an exercise, switch to the corresponding directory and follow the instructions in the README or the code comments. Depending on your knowledge and what you want to deepen, feel free to switch to the exercises you find relevant.

### 1. 🔤 Function reverseString | 01_exercise | 20 minutes
Implement unit tests using AI-generated suggestions. The function is located in the `utils.ts` file and the unit tests in the `utils.test.ts` file.

### 2. ⏳ Function formatDate - 02_exercise - 20 minutes
Implement the `formatDate` function using the tests in the `utils.test.ts file`. This exercise helps you test the potential of your generative AI regarding TDD practices. Feel free to improve the unit tests.

### 3. 👥 Function fetchData - 03_exercise - 20 minutes
Mock an API call and develop a test strategy by considering all possible use cases. To work on an exercise, switch to the relevant folder and follow the instructions provided in that folder's README or commented within the code.

## 📈 Goals and Benefits of the Exercises

**📝 Exercise 1, Unit Tests:** : This exercise develops the ability to use AI to quickly generate effective unit tests. By automating test creation, software developers can focus on writing high-quality code and exploring edge cases that might not be immediately apparent. The exercise enhances productivity by showing how AI can handle routine test creation tasks, enabling a more robust testing process.

**🧩 Exercise 2, TDD** : This task emphasizes TDD practices through generative AI and assesses the precision of this approach regarding clean code practices. It demonstrates how AI can produce code from unit tests and iterate on their completion to ensure the function behaves according to different scenarios defined in your unit tests.

**🤖 Exercise 3, Unit Tests with Mocking** : Focusing on a mocking strategy for API calls, this exercise encourages a thorough inspection of all possible application states, such as successful data retrieval, API error handling, and timeouts. It increases a developer's ability to use AI to identify and cover all potential cases, leading to resilient and reliable software solutions.

## 🎯 Conclusion
Engaging in these exercises will not only improve your skills in unit testing but also provide insights into how AI can be a powerful ally. Each exercise folder in this repository contains a solution folder to be consulted only if you need help and/or if you have exhausted the time allocated for this exercise.
