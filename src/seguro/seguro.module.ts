import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { SeguroController } from './controllers/seguro.controller';
import { Seguro } from './entities/seguro.entity';
import { SeguroService } from './services/seguro.service';

@Module({
  imports: [TypeOrmModule.forFeature([Seguro]), CategoriaModule],
  controllers: [SeguroController],
  providers: [SeguroService],
  exports: [SeguroService],
})
export class SegurosModule {}
