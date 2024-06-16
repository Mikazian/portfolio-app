import { Controller, Get } from '@nestjs/common';

@Controller()
export class ServerLivenessController {
  @Get()
  liveness(): void {}
}
