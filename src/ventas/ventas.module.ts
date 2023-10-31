import { Module } from '@nestjs/common';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { CategoryEntity } from './category.entitys';

@Module({
  imports:[
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity])
  ],
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}