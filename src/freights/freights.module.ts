import { Module } from '@nestjs/common';
import { FreightsService } from './freights.service';
import { FreightsController } from './freights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Freight, FreightSchema } from './entities/freight.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Freight.name, schema: FreightSchema }]),
  ],
  controllers: [FreightsController],
  providers: [FreightsService],
})
export class FreightsModule {}
