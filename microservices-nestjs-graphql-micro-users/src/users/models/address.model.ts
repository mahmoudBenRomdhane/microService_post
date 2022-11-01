import { Field, Directive, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';
import { User } from './user.model';

@Entity('address')
@ObjectType()
@Directive('@key(fields: "id")')
export class Address {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'id of the user' })
  id: number;

  @Column()
  @Field(() => String, { description: 'country of the Address' })
  country: string;

  @Column()
  @Field(() => String, { description: 'city of the Address' })
  city: string;

  @Field(() => String, { description: 'create date of the Address' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Field(() => String, { description: 'update date of the Address' })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  @Field(() => User, { description: 'user of the Address' })
  @OneToOne(() => User, (user: User) => user.address)
  public user: User;

}
