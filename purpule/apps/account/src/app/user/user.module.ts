import { UserRepository } from './repositories/user.repository';
import { User, UserScheme } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserScheme }
  ])],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserModule { }
