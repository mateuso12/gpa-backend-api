import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FreightsModule } from './freights/freights.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateuso12:m7E00H3TiJLRfkZh@atlascluster.z3pqwmh.mongodb.net/test',
    ),
    FreightsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
