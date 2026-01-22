import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Seguro } from '../entities/seguro.entity';

@Injectable()
export class SeguroService {
  constructor(
    @InjectRepository(Seguro)
    private seguroRepository: Repository<Seguro>,
    // private categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Seguro[]> {
    return await this.seguroRepository.find({
      // relations: {
      //   categoria: true,
      // },
    });
  }

  async findById(id: number): Promise<Seguro> {
    const seguro = await this.seguroRepository.findOne({
      where: {
        id,
      },
      // relations: {
      //   categoria: true,
      // },
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
      // relations: {
      //   categoria: true,
      // },
    });
  }

  async create(seguro: Seguro): Promise<Seguro> {
    // await this.categoriaService.findById(seguro.categoria.id);

    return await this.seguroRepository.save(seguro);
  }

  async update(seguro: Seguro): Promise<Seguro> {
    await this.findById(seguro.id);

    // await this.categoriaService.findById(seguro.categoria.id);

    return await this.seguroRepository.save(seguro);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.seguroRepository.delete(id);
  }
}
