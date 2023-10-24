import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('roles',{schema:'administration'})
export class UserRoleEntity{
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

    @Column('varchar',{
        name: 'name',
        nullable:false,
        comment:'first name'
    })
    name: string

    @Column('varchar',{
        name: 'lastname',
        nullable: false,
        comment: 'first lastname'
    })
    lastname: string

    @Column('number',{
        name: 'identification',
        nullable: false,
        comment: 'identification number'
    })
    identification: number

    @Column('varchar',{
        name: 'role',
        nullable: false,
        comment: 'role name'
    })
    role: string

    @Column('varchar', {
        name: 'password',
        nullable: false,
        comment: 'password'
    })

@BeforeInsert()
@BeforeUpdate()

async setTittle(){
    if(!this.name){
        return
    }
    this.name = this.name.toLocaleUpperCase().trimStart().trimEnd();
}


}
