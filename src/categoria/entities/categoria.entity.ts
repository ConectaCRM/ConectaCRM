import { IsNotEmpty } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn  } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';



@Entity({name: 'tb_categoria'})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @UpdateDateColumn()
    data: Date

    @OneToMany(() => Cliente, (cliente) => cliente.categoria)
    cliente: Cliente[];


}
