import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'name of the user' })
  name: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
