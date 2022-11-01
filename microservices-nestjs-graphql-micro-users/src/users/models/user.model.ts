import { Field, Directive, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.model';
@Entity('users')
@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'id of the user' })
  id: number;

  @Column()
  @Field(() => String, { description: 'name of the user' })
  name: string;

  @Column()
  @Field(() => String, { description: 'role of the user' })
  role: string;

  @Field(() => String, { description: 'create date of the user' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Field(() => String, { description: 'update date of the user' })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;

  @Field(() => Address, { description: 'address of the user',nullable:true })
  @OneToOne(() => Address, {
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public address: Address;
}
