import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DisqueraModule } from './disquera/disquera.module';
import { DisqueraController } from './disquera/disquera.controller';
import { DisqueraService } from './disquera/disquera.service';

@Module({
  imports: [
    TypeOrmModule,
    VentasModule,
    DisqueraModule,
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password: 'root',
      database:'disquera',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,

    }),

  ],
  controllers: [AppController, DisqueraController],
  providers: [AppService, DisqueraService],
})
export class AppModule {}