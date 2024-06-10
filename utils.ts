export interface Book {
  id: number;
  title: string;
  subtitle?: string;
}

export function fullTitle(book: {
  id: number;
  title: string;
  subtitle?: string;
}): string {
  if (!book.title) {
    throw new Error("Title is required");
  }
  return book.subtitle ? `${book.title}: ${book.subtitle}` : book.title;
}

// export function fullTitle(book: {
//   id: number;
//   title: string;
//   subtitle?: string;
// }): string {
//   if (!book.title) {
//     throw new Error("Title is required");
//   }

//   return book.subtitle ? `${book.title}: ${book.subtitle}` : book.title;
// }
