import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtistaEntity } from "./artista.entity";
import { CancionEntity } from "./cancion.entity";
import { AlbumEntity } from "./album.entity";
import { ConciertoEntity } from "./concierto.entity";
import { DisqueraEntity } from "./disquera.entity";


@Entity('bandas',{schema:'musica'})
export class BandaEntity{
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

    @OneToMany(()=>CancionEntity, cancion=>cancion.banda)
    cancion: CancionEntity[]

    @OneToMany(()=>AlbumEntity, album=>album.banda)
    album: AlbumEntity[]

    @OneToMany(()=>ConciertoEntity, concierto=>concierto.banda)
    concierto: CancionEntity[]

    @ManyToOne(()=>DisqueraEntity, disquera=>disquera.banda)
    disquera: DisqueraEntity

    @Column('varchar',{
        name: 'banda',
        nullable: false,
        comment: 'nombre de la banda'
    })
    banda: string

    @Column('date',{
        name: 'formacion',
        nullable: true,
        comment: 'año en la que se forma la banda'
    })
    formacion: Date

    @Column('numeric',{
        name: 'miembros',
        nullable: false,
        comment:'número de miembros'
    })
    miembros: number

}