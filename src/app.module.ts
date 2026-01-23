import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Seguro } from './seguro/entities/seguro.entity';
<<<<<<< HEAD
import { Usuario } from './usuario/entities/usuario.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { SegurosModule } from './seguro/seguro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
=======
import { SegurosModule } from './seguro/seguro.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
>>>>>>> 05b8c8e89f6443a3e894da8ef54e628de0f31a17

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_sistema_seguro',
<<<<<<< HEAD
      entities: [Seguro, Categoria, Usuario],
=======
      entities: [Seguro, Usuario, Categoria],
>>>>>>> 05b8c8e89f6443a3e894da8ef54e628de0f31a17
      synchronize: true,
    }),
    SegurosModule,
    UsuarioModule,
    CategoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
