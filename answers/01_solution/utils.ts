export function reverseString(input: string): string {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined");
  }
  return input.split("").reverse().join("");
}

export function isPalindromeRecursive(input: string): boolean {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  if (input.length <= 1) {
    return true;
  }

  const reversedSubstring = reverseString(input.slice(1, -1));

  return (
    input[0] === input[input.length - 1] &&
    isPalindromeRecursive(reversedSubstring)
  );
}
