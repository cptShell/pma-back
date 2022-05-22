import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from '../auth/auth.module';

import { Column } from './columns.entity';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';

import { BoardsModule } from '../boards/boards.module';

@Module({
  providers: [ColumnsService],
  controllers: [ColumnsController],
  imports: [
    AuthModule,
    BoardsModule,
    TypeOrmModule.forFeature([Column]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  exports: [ColumnsService],
})
export class ColumnsModule {}
