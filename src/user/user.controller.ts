import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserData } from './user.dto';

@Controller('api/v1/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUser() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() userData: UserData) {
    return this.userService.createUser(userData);
  }
}
