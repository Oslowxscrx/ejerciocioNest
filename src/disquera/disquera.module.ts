import { Module } from '@nestjs/common';
import { DisqueraController } from './disquera.controller';
import { DisqueraService } from './disquera.service';
import { AlbumEntity } from 'src/disquera/album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistaEntity } from 'src/disquera/artista.entity';
import { BandaEntity } from 'src/disquera/banda.entity';
import { CancionEntity } from 'src/disquera/cancion.entity';
import { ConciertoEntity } from 'src/disquera/concierto.entity';
import { DisqueraEntity } from 'src/disquera/disquera.entity';


@Module({
    imports:[
      TypeOrmModule.forFeature([AlbumEntity, ArtistaEntity, BandaEntity, CancionEntity, ConciertoEntity, DisqueraEntity])
    ],
    controllers: [DisqueraController],
    providers: [DisqueraService]
  })
  export class DisqueraModule {}
