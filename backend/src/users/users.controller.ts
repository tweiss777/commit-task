import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Delete,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { NewUserDTO } from './DTOs/NewUser.dto';
import { UsersService } from './users.service';
import { GetUserDTO } from './DTOs/GetUser.dto';
import { UserParamDTO } from './DTOs/UserParam.dto';
import { User } from './schemas/user.schema';
@Controller('api/v1/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async InsertUser(@Body() newUser: NewUserDTO) {
    if (newUser.password !== newUser.confirmPassword) {
      throw new BadRequestException({
        message: ['Passwords do not match'],
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }
    const user: User = {
      name: newUser.name,
      phone: newUser.phone,
      password: newUser.password,
    };
    const userId = await this.userService.insert(user);
    return { id: userId };
  }

  @Get(':id')
  async GetUser(@Param() { id }: UserParamDTO) {
    console.log('hit');
    const user: User = await this.userService.getById(id);
    if (!user) {
      throw new NotFoundException('User not found', {
        description: 'User not found',
      });
    }

    const getUserDTO: GetUserDTO = {
      id: user.id,
      name: user.name,
      phone: user.phone,
    };
    return getUserDTO;
  }
  @Delete(':id')
  async DeleteUser(@Param() { id }: UserParamDTO) {
    const success = await this.userService.removeOne(id);
    if (!success) {
      throw new NotFoundException('User not found', {
        description: 'User not found',
      });
    }
    return { success };
  }
}
