import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from './current-user.decorator';
import { LoginArgs } from './dto/login.args';
import { LogInWithCredentialsGuard } from './local.guard';
import { Login } from './models/login.model';

@Resolver(() => Login)
export class AuthResolver {
  @UseGuards(LogInWithCredentialsGuard)
  @Query(() => Login, { nullable: true })
  async login(
    @Args() args: LoginArgs,
    @CurrentUser() user,
    ) {
    console.log({args,user});

    return {userName:user.username,token:""};
  }
}
