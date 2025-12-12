import {
  IsNotEmpty,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsString,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  nome: string;

  @IsDateString()
  @IsNotEmpty()
  @Column({ type: 'timestamp', nullable: false })
  dataCadastro: Date;

  @IsNumber()
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;

  @IsBoolean()
  @Column({ type: 'boolean', default: true })
  ativo: boolean;
}
