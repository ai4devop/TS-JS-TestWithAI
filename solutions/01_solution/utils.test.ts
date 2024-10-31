import { describe, it, expect } from "@jest/globals";
import { reverseString, isPalindromeRecursive } from "./utils";

describe("reverseString", () => {
  it("reverses a string correctly", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("returns an empty string if input is empty", () => {
    expect(reverseString("")).toBe("");
  });

  it("should reverse a string with one character", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("should reverse a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("should reverse a string with special characters", () => {
    expect(reverseString("123!@#")).toBe("#@!321");
  });

  it("throws error if input is null", () => {
    expect(() => reverseString(null as any)).toThrow(
      "Input cannot be null or undefined"
    );
  });

  it("throws error if input is undefined", () => {
    expect(() => reverseString(undefined as any)).toThrow(
      "Input cannot be null or undefined"
    );
  });
});
describe("isPalindromeRecursive", () => {
  it("returns true for a single character", () => {
    expect(isPalindromeRecursive("a")).toBe(true);
  });

  it("returns true for an empty string", () => {
    expect(isPalindromeRecursive("")).toBe(true);
  });

  it("returns true for a simple palindrome", () => {
    expect(isPalindromeRecursive("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindromeRecursive("hello")).toBe(false);
  });

  it("returns false for a palindrome with special characters", () => {
    expect(isPalindromeRecursive("A man, a plan, a canal, Panama")).toBe(false);
  });

  it("returns true for a palindrome without special characters", () => {
    expect(isPalindromeRecursive("amanaplanacanalpanama")).toBe(true);
  });

  it("throws error if input is null", () => {
    expect(() => isPalindromeRecursive(null as any)).toThrow(
      "Input cannot be null or undefined"
    );
  });

  it("throws error if input is undefined", () => {
    expect(() => isPalindromeRecursive(undefined as any)).toThrow(
      "Input cannot be null or undefined"
    );
  });
});
