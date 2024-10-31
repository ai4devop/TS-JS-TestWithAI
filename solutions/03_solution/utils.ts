export async function fetchData(
  url: string
): Promise<{ data?: string | never; error?: string }> {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockStatusCode = 200;
        if (mockStatusCode === 200) {
          resolve({ data: "Hello, world!" });
        } else if (mockStatusCode === 404) {
          resolve({ error: "Not Found" });
        } else if (mockStatusCode === 500) {
          resolve({ error: "Internal Server Error" });
        } else {
          reject(new Error("Unknown error"));
        }
      }, 1000);
    });
  } catch (error) {
    return { error: (error as Error).message };
  }
}
