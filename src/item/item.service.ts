import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({data: createItemDto});
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id_item: number) {
    return `This action returns a #${id_item} item`;
  }

  update(id_item: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id_item} item`;
  }

  remove(id_item: number) {
    return `This action removes a #${id_item} item`;
  }
}
