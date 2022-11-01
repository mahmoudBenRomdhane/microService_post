import {
  Args,
  Query,
  Mutation,
  Resolver,
  ResolveReference,
  Int,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { RemoveUserOutput } from './dto/remove-user.output';
import { UpdateUserInput } from './dto/update-user.input';
@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('userId', { type: () => Int }) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => RemoveUserOutput)
  removeUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.usersService.remove(userId);
  }

  @Mutation(() => User)
  updateUser(@Args('userId', { type: () => Int }) userId: number,@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(userId,updateUserInput);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }) {
    return this.usersService.findOne(reference.id);
  }
}
