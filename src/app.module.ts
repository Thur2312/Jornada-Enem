import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [PrismaService],
})
export class AppModule {}
