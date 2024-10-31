import { describe, it, expect } from "@jest/globals";
import { formatDate } from "./utils";

describe("formatDate", () => {
  it("formats date correctly as YYYY-MM-DD", () => {
    const date = new Date(2023, 9, 16); // October 16, 2023
    expect(formatDate(date)).toBe("2023-10-16");
  });

  it("pads single-digit month and day with leading zero", () => {
    const date = new Date(2023, 0, 5); // January 5, 2023
    expect(formatDate(date)).toBe("2023-01-05");
  });
});
