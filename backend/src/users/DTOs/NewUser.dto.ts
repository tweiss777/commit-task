import { IsPhoneNumber, IsNotEmpty, MaxLength, Matches } from 'class-validator';
export class NewUserDTO {
    @IsNotEmpty({
        message: 'Name cannot be empty',
    })
    @MaxLength(32, {
        message: 'Name may contain up to only 32 characters',
    })
    @Matches(/^[a-zA-Z]+$/, {
        message: 'Name may only contain letters.',
    })
    name: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    @Matches(/^(?=.*[A-Z])(?=.*[\W_]).{6,12}$/, {
        message: 'Password must be in the range between 6 to 12 characters, contain one upper case, and one special character.',
    })
    password: string;

    @IsNotEmpty({
        message: 'Password confirmation field cannot be blank',
    })
    confirmPassword: string;
}
