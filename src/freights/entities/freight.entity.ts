import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FreightDocument = Freight & Document;

@Schema()
export class Freight {
  @Prop()
  active: number;

  @Prop()
  assistant: number;

  @Prop()
  carrierCode: number;

  @Prop()
  carrierType: string;

  @Prop()
  dailyValue: number;

  @Prop()
  kmFranchise: number;

  @Prop()
  nightSurcharge: number;

  @Prop()
  nightSurchargeFrom: string;

  @Prop()
  orderValue: number;

  @Prop({ type: Object })
  site: {
    id: number;
    storeId: string;
  };

  @Prop()
  sundayHoliday: number;

  @Prop()
  valuePerOrder: number;
}

export const FreightSchema = SchemaFactory.createForClass(Freight);
