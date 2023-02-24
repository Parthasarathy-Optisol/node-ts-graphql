import { Container } from "typescript-ioc";

export * from "./book.api";

import ioc_config from "./ioc.config";

Container.configure(...ioc_config);
