import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { UsuarioController } from './controllers/usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), CategoriaModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
