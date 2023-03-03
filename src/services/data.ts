import { Book } from "../interface";
import BookModel from "../models/books";
import { GetDataFromCache, SetDataToCache } from "../redisCache/redis.cache";
import { Books } from "../schemas";

const findBook = async () => {
  let result: Books[] | any = await GetDataFromCache("book");
  console.log("result from redis", result)
  if (result) {
    return result;
  } else {
    result = await BookModel.find().exec();
    await SetDataToCache("book", result);
    return result;
  }
};

export const book: Book[] | any = findBook()
  .then((data) => {
    return data;
  })
  .catch((error) => console.error(error));
