import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): any {
    return this.prisma.notification.findMany();
    // return this.appService.getHello();
  }
}
