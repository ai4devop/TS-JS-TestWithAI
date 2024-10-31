// Nouvelle fonction asynchrone simulant un appel API (mock)
export async function fetchData(): Promise<{ data: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Hello, world!" });
    }, 1000); // Simule le délais du réseau
  });
}
