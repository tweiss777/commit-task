import { IsMongoId } from 'class-validator'
export class UserParamDTO {
    @IsMongoId({
        message: "Invalid ID"
    })
    id: string
}
