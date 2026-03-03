import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_seguros' })
export class Seguro {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional()
  @Column({ length: 100, nullable: false })
  numero_apolice: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  @Column({
    type: 'decimal',
    precision: 19,
    scale: 4,
    transformer: {
      from: (value: string) => parseFloat(value),
      to: (value: number) => value,
    },
  })
  valor_apolice: number;

  @IsNotEmpty()
  @IsOptional()
  @Column({ length: 100, nullable: false })
  cobertura: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsIn(['Ativo', 'Inativo', 'Em análise'])
  @Column({ length: 100, nullable: false })
  status_cobertura: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.seguro)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @ManyToOne(() => Categoria, (categoria) => categoria.seguro)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;
}
