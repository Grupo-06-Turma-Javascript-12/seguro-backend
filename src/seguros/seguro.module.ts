import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguros } from './entities/seguro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seguros])],
  controllers: [],
  providers: [],
  exports: [],
})
export class SegurosModule {}
