import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'userName',
      passwordField: 'password', 
    });
  }

  async validate(userName: string, password: string): Promise<any> {
    console.log('111111111',{userName,password});
    const user = await this.authService.validateUser(userName, password);
    console.log({user});
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
