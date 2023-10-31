import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ArtistaEntity } from "./artista.entity";
import { BandaEntity } from "./banda.entity";


@Entity('disqueras',{schema:'musica'})
export class DisqueraEntity{
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

    @OneToMany(()=>ArtistaEntity, artista=>artista.disquera)
    artista: ArtistaEntity

    @OneToMany(()=>BandaEntity, banda=>banda.disquera)
    banda: BandaEntity[]

    @Column('varchar',{
        name: 'disquera',
        nullable: false,
        comment: 'nombre de la disquera'
    })
    disquera: string

    @Column('date',{
        name: 'fundacion',
        nullable: true,
        comment: 'año de fundación'
    })
    fundacion: Date

    @Column('varchar',{
        name: 'pais',
        nullable: true,
        comment: 'país origen'
    })
    pais: string

    @Column('varchar',{
        name: 'representante',
        nullable: false,
        comment: 'nombre del representante'
    })

    representante: string
}