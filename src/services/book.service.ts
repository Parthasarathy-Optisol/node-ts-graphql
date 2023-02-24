import { bookApi } from "./book.api";
import { book as bookData } from "./data";
export class BookService extends bookApi {
  getBooks(): object[] {
    return bookData;
  }
}
