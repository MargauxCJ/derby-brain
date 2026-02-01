import { NotFoundException } from '@nestjs/common';
import {
  Repository,
  DeepPartial,
  FindManyOptions,
  ObjectLiteral,
} from 'typeorm';

export abstract class BaseService<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findOne(id: number | string): Promise<T> {
    const item = await this.repository.findOneBy({ id } as any);
    if (!item) {
      throw new NotFoundException(
        `L'enregistrement avec l'id ${id} n'existe pas.`,
      );
    }
    return item;
  }

  create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async update(id: number | string, data: DeepPartial<T>): Promise<T> {
    await this.repository.update(id, data as any);
    return this.findOne(id);
  }

  async remove(id: number | string): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `L'enregistrement avec l'id ${id} n'existe pas.`,
      );
    }
  }
}
