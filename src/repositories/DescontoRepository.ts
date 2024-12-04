import { AppDataSource } from "../data-source";
import { Desconto } from "../entities/Desconto";

export const DescontoRepository = AppDataSource.getRepository(Desconto);