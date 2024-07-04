import { PartialType } from '@nestjs/mapped-types';
import { CreateLogDto } from './create-logger.dto';

export class UpdateLoggerDto extends PartialType(CreateLogDto) {}
