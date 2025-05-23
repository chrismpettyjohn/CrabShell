import { AuthLoginParams, AuthRegisterParams } from '@crabshell/public-client';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthLoginDTO implements AuthLoginParams {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class AuthRegisterDTO implements AuthRegisterParams {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  passwordAgain: string;
}
