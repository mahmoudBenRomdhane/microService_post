import {
  Query,
  Args,
  ResolveField,
  Resolver,
  Parent,
  Mutation,
  Int,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { RemovePostOutput } from './dto/remove-post.output';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { User } from './entities/user.entity';
@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('postId', { type: () => Int }) postId: number) {
    return this.postsService.findOne(postId);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  updatePost(
    @Args('postId', { type: () => Int }) postId: number,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postsService.update(postId, updatePostInput);
  }

  @Mutation(() => RemovePostOutput)
  removePost(@Args('postId', { type: () => Int }) postId: number) {
    return this.postsService.remove(postId);
  }

  @ResolveField(() => User)
  user(@Parent() post: Post) {
    return { __typename: 'User', id: post.authorId };
  }
}
