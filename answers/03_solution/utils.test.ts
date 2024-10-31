import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import { fetchData } from "./utils";

jest.mock("./utils", () => ({
  fetchData: jest.fn(),
}));

describe("fetchData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should return data for successful response (200)", async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ data: "Hello, world!" } as never);
    
    await expect(fetchData("/success")).resolves.toEqual({ data: "Hello, world!" });
    expect(fetchData).toHaveBeenCalledWith("/success");
  });

  it("should return 'Not Found' error for 404 response", async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error("Not Found") as never);

    await expect(fetchData("/not-found")).rejects.toThrow("Not Found");
    expect(fetchData).toHaveBeenCalledWith("/not-found");
  });

  it("should return 'Internal Server Error' for 500 response", async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(
      new Error("Internal Server Error") as never);

    await expect(fetchData("/server-error")).rejects.toThrow("Internal Server Error");
    expect(fetchData).toHaveBeenCalledWith("/server-error");
  });

  it("should handle unexpected errors", async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(
      new Error("Unexpected error") as never
    );

    await expect(fetchData("/unknown")).rejects.toThrow("Unexpected error");
    expect(fetchData).toHaveBeenCalledWith("/unknown");
  });
});

