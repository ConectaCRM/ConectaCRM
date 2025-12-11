import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findById(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: {
        id,
      },
    });

    if (!cliente)
      throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);

    return cliente;
  }

  async findByNome(nome: string): Promise<Cliente[]> {
    return await this.clienteRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }
  async create(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<Cliente> {
    const buscaCliente = await this.findById(cliente.id);

    if (!buscaCliente || !cliente.id)
      throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);

    return await this.clienteRepository.save(cliente);
  }

  async delete(id: number): Promise<DeleteResult> {
    const buscaCliente = await this.findById(id);

    if (!buscaCliente)
      throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);

    return await this.clienteRepository.delete(id);
  }
}
