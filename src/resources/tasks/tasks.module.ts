import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from '../auth/auth.module';

import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

import { BoardsModule } from '../boards/boards.module';
import { ColumnsModule } from '../columns/columns.module';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    AuthModule,
    BoardsModule,
    ColumnsModule,
    TypeOrmModule.forFeature([Task]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
})
export class TasksModule {}
