import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SeguroService } from '../services/seguro.service';
import { Seguro } from '../entities/seguro.entity';

@Controller('/seguros')
export class SeguroController {
  constructor(private readonly seguroService: SeguroService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Seguro[]> {
    return this.seguroService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Seguro> {
    return this.seguroService.findById(id);
  }

  @Get('/apolice/:apolice')
  @HttpCode(HttpStatus.OK)
  findAllByApolice(
    @Param('apolice') numero_apolice: string,
  ): Promise<Seguro[]> {
    return this.seguroService.findAllByApolice(numero_apolice);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() seguro: Seguro): Promise<Seguro> {
    return this.seguroService.create(seguro);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() seguro: Seguro): Promise<Seguro> {
    if (seguro.id && seguro.status_cobertura) {
      return this.seguroService.atualizarStatus(
        seguro.id,
        seguro.status_cobertura,
      );
    }

    return this.seguroService.update(seguro);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.seguroService.delete(id);
  }
}
