import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey, nice to see you';
  }

  getHey(): string {
    return 'How are you';
  }

  getBye(): string {
    return 'See you soon';
  }
}
