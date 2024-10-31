export function formatDate(date: Date | null, locale: string): string {
  if (!date) {
    throw new Error("Date cannot be null");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  if (locale === "fr-FR") {
    return `${day}/${month}/${year}`;
  }

  return `${year}-${month}-${day}`;
}
