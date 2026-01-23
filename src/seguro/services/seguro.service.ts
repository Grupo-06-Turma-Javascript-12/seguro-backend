import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { Seguro } from '../entities/seguro.entity';

@Injectable()
export class SeguroService {
  constructor(
    @InjectRepository(Seguro)
    private seguroRepository: Repository<Seguro>,
    private categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Seguro[]> {
    return await this.seguroRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Seguro> {
    const seguro = await this.seguroRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });

    if (!seguro)
      throw new HttpException('Seguro não encontrado!', HttpStatus.NOT_FOUND);

    return seguro;
  }

  async findAllByApolice(numero_apolice: string): Promise<Seguro[]> {
    return await this.seguroRepository.find({
      where: {
        numero_apolice: ILike(`%${numero_apolice}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async create(seguro: Seguro): Promise<Seguro> {
    seguro.status_cobertura = 'Em análise';
    await this.categoriaService.findById(seguro.categoria.id);

    return await this.seguroRepository.save(seguro);
  }

  async update(seguro: Seguro): Promise<Seguro> {
    const seguroExistente = await this.findById(seguro.id);

    seguro.status_cobertura = seguroExistente.status_cobertura;

    await this.categoriaService.findById(seguro.categoria.id);

    return await this.seguroRepository.save({
      ...seguroExistente,
      ...seguro,
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.seguroRepository.delete(id);
  }

  async atualizarStatus(id: number, novoStatus: string): Promise<Seguro> {
    const statusPermitidos = ['Em análise', 'Ativo', 'Inativo'];

    if (!statusPermitidos.includes(novoStatus)) {
      throw new HttpException('Status inválido', HttpStatus.BAD_REQUEST);
    }

    const seguro = await this.findById(id);

    if (seguro.status_cobertura === 'Inativo' && novoStatus === 'Ativo') {
      throw new HttpException(
        'Seguro inativo não pode ser reativado diretamente',
        HttpStatus.BAD_REQUEST,
      );
    }

    seguro.status_cobertura = novoStatus;

    return await this.seguroRepository.save(seguro);
  }
}
