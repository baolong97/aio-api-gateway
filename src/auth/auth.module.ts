import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LogInWithCredentialsGuard } from './local.guard';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PassportModule, UsersModule],
  controllers: [],
  providers: [LocalStrategy, AuthResolver, AuthService,LogInWithCredentialsGuard],
})
export class AuthModule {}
