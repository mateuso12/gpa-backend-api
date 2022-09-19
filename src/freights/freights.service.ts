import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFreightDto } from './dto/create-freight.dto';
import { UpdateFreightDto } from './dto/update-freight.dto';
import { Freight, FreightDocument } from './entities/freight.entity';

@Injectable()
export class FreightsService {
  constructor(
    @InjectModel(Freight.name) private freightModel: Model<FreightDocument>,
  ) {}

  create(createFreightDto: CreateFreightDto) {
    const freight = new this.freightModel(createFreightDto);
    return freight.save();
  }

  findAll() {
    return this.freightModel.find();
  }

  findOne(id: string) {
    return this.freightModel.findById(id);
  }

  update(id: string, updateFreightDto: UpdateFreightDto) {
    return this.freightModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateFreightDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.freightModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
