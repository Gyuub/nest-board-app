import { Injectable, Logger } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsModule } from './boards.module';
import { v1 as uuid } from "uuid";
import { CreateBoardDto } from './dto/create-board';
import { throws } from 'assert';

@Injectable()
export class BoardsService {
    private boards: Board[] = [
        {
            "id": "1",
            "title": "제목 테스트 입니다 1",
            "description": "내용 테스트 입니다 0",
            "status": BoardStatus.PUBLIC
        },
        {
            "id": "2",
            "title": "제목 테스트 입니다 2",
            "description": "내용 테스트 입니다 0",
            "status": BoardStatus.PUBLIC
        },
        {
            "id": "3",
            "title": "제목 테스트 입니다 3",
            "description": "내용 테스트 입니다 0",
            "status": BoardStatus.PUBLIC
        }
    ];

    getAllBoards(): Board[] {
        return this.boards;
    }

    getBoardById(id: String): Board{
        return this.boards.find((board) => board.id === id)
    }

    createBoard(createBoardDto: CreateBoardDto): Board{
        const board: Board = {
            id: uuid(),
            title: createBoardDto.title,
            description: createBoardDto.description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    deleteBoard(id: String): Board[]{
        /**
         * array remove case 3.
         * 1. indexof
         * 2. loop
         * 3. filter
         * 
         * 여러 요소를 여러개를 제거할 때는 2,3번이 안정적이고 빠르며
         * 하나의 요소를 제거할 때는 indexof 가 안정적이고 빠르다
         */
        
        const boardIndex = this.boards.findIndex((board) => board.id === id)
        this.boards.splice(boardIndex, 1)
        return this.boards
    }
    
    updateBoard(id: String, boardStatus: BoardStatus): Board{
        const board = this.getBoardById(id);
        board.status = boardStatus;
        return board;
    }
}
