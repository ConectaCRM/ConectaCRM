import { IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsString,} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_clientes' })
export class Cliente {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 150, nullable: false })
  @ApiProperty()
  nome: string;

  @IsDateString()
  @IsNotEmpty()
  @Column({ type: 'timestamp', nullable: false })
  @ApiProperty()
  dataCadastro: Date;

  @IsNumber()
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @ApiProperty()
  valor: number;

  @IsBoolean()
  @Column({ type: 'boolean', default: true })
  @ApiProperty()
  ativo: boolean;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.cliente, {
  onDelete: 'CASCADE'
  })
  usuario: Usuario;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria, (categoria) => categoria.cliente, {
  onDelete: 'CASCADE'
  })
  categoria: Categoria;


}
