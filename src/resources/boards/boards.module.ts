import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from '../auth/auth.module';

import { Board } from './boards.entity';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';

@Module({
  providers: [BoardsService],
  controllers: [BoardsController],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Board]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  exports: [BoardsService],
})
export class BoardsModule {}
