import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
  // Cria um novo item
  // URL: POST http://localhost:3000/item
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }
  // Retorna todos os itens
  // URL: GET http://localhost:3000/item
  @Get()
  findAll() {
    return this.itemService.findAll();
  }
  // Retorna um item específico
  // URL: GET http://localhost:3000/item/[id_item]
  @Get(':id')
  findOne(@Param('id') id_item: string) {
    return this.itemService.findOne(+id_item);
  }
  // Atualiza um item
  // URL: PATCH http://localhost:3000/item/[id_item]
  @Patch(':id')
  update(@Param('id') id_item: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id_item, updateItemDto);
  }
  // Remove um item
  // URL: DELETE http://localhost:3000/item/[id_item]
  @Delete(':id')
  remove(@Param('id') id_item: string) {
    return this.itemService.remove(+id_item);
  }
}
