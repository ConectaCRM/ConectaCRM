import { IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { OneToMany } from "typeorm";

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    email: string
    
    @IsNotEmpty()
    @MinLength (8)
    @Column({length:30, nullable: false })
    senha: string

    @IsNotEmpty()
    @Column ({ length: 1000, nullable: false})
    foto: string

    @OneToMany(() => Cliente, (cliente) => cliente.usuario)
    cliente: Cliente[];


}