import { resolverManager } from "./resolverManager";
import { Resolver, Query } from "type-graphql";
import { Inject } from "typescript-ioc";

import books from "../data.json";
import { Books } from "../schemas";
import { bookApi } from "../services";
@Resolver(Books)
export class bookResolver {
  @Inject
  bookService:bookApi
  
  @Query((returns) => [Books])
  books(): any {
    return this.bookService.getBooks();
  }
}

export const resolvers = {
  Query: {
    books: () => books,
  },
};
resolverManager.registerResolver(bookResolver);
