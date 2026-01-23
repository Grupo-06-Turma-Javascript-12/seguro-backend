import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Seguro } from '../../seguro/entities/seguro.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @IsString()
  @Column({ length: 5000 })
  foto: string;

  @OneToMany(() => Seguro, (seguro) => seguro.usuario)
  seguro: Seguro[];
}
