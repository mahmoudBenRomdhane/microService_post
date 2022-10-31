import {Field, ObjectType,ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {

  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'id of the user' })
  id: string;

  @Column()
  @Field(() => String, { description: 'name of the user' })
  name: string;

  @Column()
  @Field(() => String, { description: 'role of the user' })
  role: string;

  
}