import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'title of the post' })
  title: string;

  @Field(() => Int, { description: 'authorId of the post' })
  authorId: number;
}
