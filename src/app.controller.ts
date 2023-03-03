import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getHello(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3, 4, 5];
    return this.client.send<number>(pattern, payload);
  }
}
