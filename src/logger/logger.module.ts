import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './entities/logger.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Log.name,schema:LogSchema}])],
  providers: [LoggerService],
  exports:[LoggerService]
})
export class LoggerModule {}
