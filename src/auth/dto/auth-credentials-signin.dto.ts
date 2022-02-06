import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { AuthCredentialsDto } from './auth-credentials.dto';

export class AuthCredentialsSignInDto extends AuthCredentialsDto {
  @IsString()
  password: string;
}
