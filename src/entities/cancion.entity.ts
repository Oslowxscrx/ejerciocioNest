import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtistaEntity } from "./artista.entity";
import { BandaEntity } from "./banda.entity";


@Entity('canciones',{schema:'musica'})
export class CancionEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    create_at: Date;

    @UpdateDateColumn({
        name: 'update_at',
        type:'timestamp',
        default:()=>'CURRENT_TIMESTAMP'
    })
    update_at: Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @ManyToOne(()=>ArtistaEntity, artista=>artista.cancion)
    artista: ArtistaEntity

    @ManyToOne(()=>BandaEntity, banda=>banda.cancion)
    banda: BandaEntity

    @Column('varchar',{
        name: 'cancion',
        nullable: true,
        comment: 'nombre de la cancion'
    })
    cancion: string

    @Column('varchar',{
        name: 'duracion',
        nullable: true,
        comment: 'duracion de la cancion'
    })
    duracion: string

    @Column('string',{
        name: 'idioma',
        nullable: true,
        comment: 'lenguaje de la canción'
    })
    idioma: string
}