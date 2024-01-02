import { IsEmail, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class UserData {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
