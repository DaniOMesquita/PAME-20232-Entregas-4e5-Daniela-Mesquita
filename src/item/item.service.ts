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
    return this.prisma.item.findMany();
  }

  findOne(id_item: number) {
    return this.prisma.item.findUnique({where: {id_item}});
  }

  update(id_item: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({where: {id_item: id_item}, data: updateItemDto});
  }

  remove(id_item: number) {
    return this.prisma.item.delete({where: {id_item}});
  }
}
