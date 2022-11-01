import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'name of the user' })
  name: string;
  @Field(() => String, { description: 'role of the user' })
  role: string;
}
