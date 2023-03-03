import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Login {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  token: string;
}
