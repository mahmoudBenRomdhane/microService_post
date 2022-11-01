import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { Address } from './models/address.model';
@Module({
  providers: [UsersResolver, UsersService],
  imports: [TypeOrmModule.forFeature([User,Address])],
})
export class UsersModule {}
