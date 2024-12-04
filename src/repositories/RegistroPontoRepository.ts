import { AppDataSource } from "../data-source";
import { RegistroPonto } from "../entities/RegistroPonto";

export const RegistroPontoRepository = AppDataSource.getRepository(RegistroPonto);