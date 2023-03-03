import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class LoginArgs {
  @Field({ nullable: false })
  userName: string;
  @Field({ nullable: false })
  password: string;
}
