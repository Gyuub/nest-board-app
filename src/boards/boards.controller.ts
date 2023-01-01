import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { throws } from 'assert';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { Logger } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board';
import { Delete, Patch, Put, UsePipes } from '@nestjs/common/decorators';

@Controller('boards')
export class BoardsController {
    // boardService: BoardsService;

    // constructor(boardService: BoardsService){
    //     this.boardService = boardService;
    // }

    // 접근제어자를 넣을경우 암묵적으로 클래스 내부 프로퍼티로 들어감
    constructor(private boardService: BoardsService){}

    @Get("/")
    getAllBoard(): Board[] {
        Logger.log("request :: getAllBoard")
        return this.boardService.getAllBoards();
    }

    @Get("/:id")
    getBoardById(@Param("id") id: String): Board{
        return this.boardService.getBoardById(id); 
    }
    
    @Post("/")
    @UsePipes(ValidationPipe)
    createBoard( @Body() createBoardDto: CreateBoardDto): Board{
        Logger.log("request :: createBoard")
        return this.boardService.createBoard(createBoardDto);
    }

    @Delete("/:id")
    deleteBoard( @Param("id") id: String): Board []{
        Logger.log("request :: deleteBoard", id)
        return this.boardService.deleteBoard(id
            
            );
    }

    @Patch("/:id")
    updateBoard(
        @Param("id") id: String,
        @Body("status") status: BoardStatus): Board {
        Logger.log("request :: updateBoard", status)
        return this.boardService.updateBoard(id, status);
    }



}
