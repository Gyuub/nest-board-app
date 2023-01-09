import { ArgumentMetadata, BadRequestException, Logger, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

/**
 * BoardStatus Pipe
 */
export class BoardStatusValidationPipe implements PipeTransform{
    transform(value: any) {
        Logger.log(`value : ${value}`)
        
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`Invalid parameter value. [parameter] : ${value}`);
        }
        return value;
    }

    private isStatusValid(status: string){
        return Object.keys(BoardStatus).indexOf(status) !== -1 ? true : false;
    }
    
}