import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MesaModule } from './mesa/mesa.module';
import { PedidoModule } from './pedido/pedido.module';
import { ItemModule } from './item/item.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FuncionarioModule, MesaModule, PedidoModule, ItemModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
