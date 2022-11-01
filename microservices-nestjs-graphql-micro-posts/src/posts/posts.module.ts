import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class PostsModule {}
