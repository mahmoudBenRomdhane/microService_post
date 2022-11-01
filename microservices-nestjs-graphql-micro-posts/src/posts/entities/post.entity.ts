import { Field, Directive, ID, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'id of the post' })
  id: number;

  @Column()
  @Field(() => String, { description: 'title of the post' })
  title: string;

  @Column()
  @Field(() => Int, { description: 'authorId of the post' })
  authorId: number;

  @Field(() => String, { description: 'create date of the post' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public created_at!: Date;

  @Field(() => String, { description: 'update date of the post' })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public updated_at!: Date;
}
