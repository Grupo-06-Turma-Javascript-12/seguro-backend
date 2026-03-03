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
import { Seguro } from '../entities/seguro.entity';
import { SeguroService } from '../services/seguro.service';

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
  update(@Body() seguro: Seguro): Promise<Seguro> {
    return this.seguroService.update(seguro);
  }

  @Put(':id/status')
  @HttpCode(HttpStatus.OK)
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.seguroService.atualizarStatus(id, status);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.seguroService.delete(id);
  }
}
