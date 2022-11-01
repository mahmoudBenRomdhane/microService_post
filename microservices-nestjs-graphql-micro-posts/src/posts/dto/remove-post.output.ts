import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemovePostOutput {
  @Field(() => String, { description: 'remove post message ' })
  message: string;
}
