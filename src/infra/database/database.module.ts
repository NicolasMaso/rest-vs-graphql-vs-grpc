import { Module } from '@nestjs/common'
import { mongooseService } from './mongoose/mongoose.service'

@Module({
  providers: [...mongooseService],
  exports: [...mongooseService],
})
export class DatabaseModule {}