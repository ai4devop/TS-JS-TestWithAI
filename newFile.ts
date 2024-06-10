import { describe, it, expect } from "@jest/globals";
import { fullTitle } from "./utils";

describe("fullTitle", () => {
  it("returns title if no subtitle", () => {
    const book = { id: 1, title: "The Hobbit" };
    expect(fullTitle(book)).toBe("The Hobbit");
  });

  it("returns title and subtitle if subtitle", () => {
    const book = {
      id: 1,
      title: "The Hobbit",
      subtitle: "There and Back Again",
    };
    expect(fullTitle(book)).toBe("The Hobbit: There and Back Again");
  });

  it("throws error if no title", () => {
    const book = { id: 1, title: "" };
    expect(() => fullTitle(book)).toThrow("Title is required");
  });
});
