import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register( {
    ttl: 60 * 60 * 1000 // 1 Hour ttl
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
