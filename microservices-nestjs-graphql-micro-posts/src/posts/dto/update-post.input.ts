import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.input';
@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => String, { description: 'title of the post' })
  title: string;
}
