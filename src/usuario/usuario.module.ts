import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { UsuarioController } from './controllers/usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
<<<<<<< HEAD
import { UsuarioController } from './controllers/usuario.controller';
import { Module } from '@nestjs/common';
import { CategoriaModule } from '../categoria/categoria.module';
=======
>>>>>>> 05b8c8e89f6443a3e894da8ef54e628de0f31a17

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), CategoriaModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
