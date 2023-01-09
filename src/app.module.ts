import { Module } from '@nestjs/common';
import { BoardsController } from './web/board/boards.controller';
import { BoardsModule } from './web/board/boards.module';
import { BoardsService } from './boards/boards.service';
@Module({
  imports: [BoardsModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
