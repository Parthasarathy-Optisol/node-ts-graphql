import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Books {
  @Field()
  title: string;

  @Field()
  author: string;
}
