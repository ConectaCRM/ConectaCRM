import { IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsString,} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';

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

  @ManyToOne(() => Usuario, (usuario) => usuario.cliente, {
  onDelete: 'CASCADE'
  })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.cliente, {
  onDelete: 'CASCADE'
  })
  categoria: Categoria;


}
