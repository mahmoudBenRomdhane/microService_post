import {
  Args,
  Query,
  Mutation,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { RemoveUserOutput } from './dto/remove-user.output';
@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.findOne(userId);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => RemoveUserOutput)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.remove(userId);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; userId: string }) {
    return this.usersService.findOne(reference.userId);
  }
}
