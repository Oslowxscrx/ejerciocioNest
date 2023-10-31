import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtistaEntity } from "./artista.entity";
import { BandaEntity } from "./banda.entity";


@Entity('albums',{schema:'musica'})
export class AlbumEntity{
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

    @ManyToOne(()=> ArtistaEntity, album=> album.artist)
    artista: ArtistaEntity[]

    @ManyToOne(()=>BandaEntity, banda=>banda.album)
    banda: BandaEntity

    @Column('varchar', {
        name: 'album',
        nullable: false,
        comment: 'nombre album'
    })
    album: string

    @Column('date', {
        name: 'lanzamiento',
        nullable: false,
        comment: 'fecha de lanzamiento'
    })
    lanzamiento: Date

    @Column('number', {
        name: 'pistas',
        nullable: true,
        comment: 'numero de pistas'
    })
    pistas: number

}