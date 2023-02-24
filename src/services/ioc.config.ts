import { ContainerConfiguration, Scope } from "typescript-ioc";
import { bookApi } from "./book.api";
import { BookService } from "./book.service";

const config: ContainerConfiguration[] = [
  {
    bind: bookApi,
    to: BookService,
    scope: Scope.Singleton,
  },
];

export default config;
