import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AlbumEntity } from "./album.entity";
import { BandaEntity } from "./banda.entity";
import { DisqueraEntity } from "./disquera.entity";
import { CancionEntity } from "./cancion.entity";
import { ConciertoEntity } from "./concierto.entity";


@Entity('artistas',{schema:'musica'})
export class ArtistaEntity{
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

    @OneToMany(()=>AlbumEntity, album=>album.artista)
    album: AlbumEntity

    @ManyToOne(()=>DisqueraEntity, disquera=>disquera.artista)
    disquera: DisqueraEntity[]

    @OneToMany(()=>CancionEntity, cancion=> cancion.artista)
    cancion: CancionEntity

    @OneToMany(()=>ConciertoEntity, concierto=>concierto.artista)
    concierto: ConciertoEntity[]


    @Column('varchar', {
        name: 'artista',
        nullable: false,
        comment: 'nombre artista'
    })
    artist: string

    @Column('varchar', {
        name: 'genero',
        nullable: true,
        comment: 'Género musical'
    })
    genero: string

    @Column('number', {
        name: 'edad',
        nullable: true,
        comment: 'edad del artista'
    })
    edad: number

}