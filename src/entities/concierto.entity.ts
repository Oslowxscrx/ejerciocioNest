import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtistaEntity } from "./artista.entity";
import { BandaEntity } from "./banda.entity";


@Entity('conciertos',{schema:'musica'})
export class ConciertoEntity{
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

    @ManyToOne(()=>ArtistaEntity, artista=> artista.concierto)
    artista: ArtistaEntity

    @ManyToOne(()=>BandaEntity, banda=>banda.concierto)
    banda: BandaEntity

    @Column('varchar',{
        name: 'lugar',
        nullable: false,
        comment:'dirección de concierto'
    })
    lugar: string

    @Column('date',{
        name: 'fecha',
        nullable: false,
        comment: 'fecha de conciertos'
    })
    fache: Date

    @Column('string',{
        name: 'precio',
        nullable: false,
        comment:'precio de las entradas'
    })
    precio: string

}