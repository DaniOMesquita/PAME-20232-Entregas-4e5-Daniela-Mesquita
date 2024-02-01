import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id_item: string) {
    return this.itemService.findOne(+id_item);
  }

  @Patch(':id')
  update(@Param('id') id_item: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id_item, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id_item: string) {
    return this.itemService.remove(+id_item);
  }
}
