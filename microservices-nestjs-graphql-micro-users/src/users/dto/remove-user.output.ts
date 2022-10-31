import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemoveUserOutput {
  @Field(() => String, { description: 'remove user message ' })
  message: string;
}
