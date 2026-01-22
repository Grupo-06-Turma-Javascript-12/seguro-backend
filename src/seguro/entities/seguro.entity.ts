import { IsIn, IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_seguros' })
export class Seguro {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  numero_apolice: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  valor_apolice: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  cobertura: string;

  @IsNotEmpty()
  @IsIn(['Ativo', 'Inativo', 'Em análise'])
  @Column({ length: 100, nullable: false })
  status_cobertura: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
