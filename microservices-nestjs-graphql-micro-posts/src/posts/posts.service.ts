import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAllByAuthorId(authorId: number): Promise<Array<Post>> {
    return await this.postRepository.find({
      where: { authorId: authorId },
    });
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const post = this.postRepository.create(createPostInput);
    return await this.postRepository.save(post);
  }

  async findOne(productId: number): Promise<Post> {
    const product = await this.postRepository.findOne({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException(`User #${productId} not found`);
    }
    return product;
  }

  async findAll(): Promise<Array<Post>> {
    return await this.postRepository.find();
  }

  async remove(productId: number): Promise<any> {
    const product = await this.postRepository.findOne({
      where: { id: productId },
    });
    await this.postRepository.remove(product);
    return {
      message: 'product removed successfully',
    };
  }

  async update(
    postId: number,
    updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    const post = await this.postRepository.preload({
      id: postId,
      ...updatePostInput,
    });
    if (!post) {
      throw new NotFoundException(`Post #${postId} not found`);
    }
    return this.postRepository.save(post);
  }
}
