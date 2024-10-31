import { describe, it, expect } from "@jest/globals";
import { formatDate } from "./utils";

describe("formatDate", () => {
  it("formats date correctly as YYYY-MM-DD for en-US locale", () => {
    const date = new Date(2023, 9, 16);
    expect(formatDate(date, "en-US")).toBe("2023-10-16");
  });

  it("formats date correctly as DD/MM/YYYY for fr-FR locale", () => {
    const date = new Date(2023, 9, 16);
    expect(formatDate(date, "fr-FR")).toBe("16/10/2023");
  });

  it("pads single-digit month and day with leading zero", () => {
    const date = new Date(2023, 0, 5);
    expect(formatDate(date, "en-US")).toBe("2023-01-05");
  });

  it("pads single-digit month and day with leading zero for fr-FR locale", () => {
    const date = new Date(2023, 0, 5);
    expect(formatDate(date, "fr-FR")).toBe("05/01/2023");
  });

  it("throws error if date is null", () => {
    expect(() => formatDate(null, "en-US")).toThrow("Date cannot be null");
  });
});
