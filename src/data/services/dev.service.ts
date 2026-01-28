import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            // type: 'mysql',
            // host: 'localhost',
            // port: 3306,
            // username: 'root',
            // password: 'root',
            // database: 'db_conectcrm',
            // entities: [Cliente, Categoria, Usuario],
            // synchronize: true,
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number (process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: [Usuario, Cliente, Categoria,],
            synchronize: true,
            logging: true,
    };
  }
}