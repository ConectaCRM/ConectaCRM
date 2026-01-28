import { IsNotEmpty } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn  } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({name: 'tb_categoria'})
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    @ApiProperty()
    descricao: string

    @UpdateDateColumn()
    @ApiProperty()
    data: Date

    @ApiProperty()
    @OneToMany(() => Cliente, (cliente) => cliente.categoria)
    cliente: Cliente[];


}
