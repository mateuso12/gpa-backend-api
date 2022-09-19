export class CreateFreightDto {
  active: boolean;
  assistant: number;
  carrierCode: number;
  carrierType: string;
  dailyValue: number;
  kmFranchise: number;
  nightSurcharge: number;
  nightSurchargeFrom: string;
  orderValue: number;
  site: {
    id: number;
    storeId: string;
  };
  sundayHoliday: number;
  valuePerOrder: number;
}
