import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    @ApiProperty({example: "email@email.com.br"})
    email: string
    
    @IsNotEmpty()
    @MinLength (8)
    @Column({length:30, nullable: false })
    @ApiProperty()
    senha: string

    @IsNotEmpty()
    @Column ({ length: 1000, nullable: false})
    @ApiProperty()
    foto: string

    @ApiProperty()
    @OneToMany(() => Cliente, (cliente) => cliente.usuario)
    cliente: Cliente[];


}