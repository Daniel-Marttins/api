import { AppDataSource } from "../data-source";
import { REGISTRO_PRONTO } from "../entities/REGISTRO_PRONTO";

export const REGISTRO_PONTO_REPOSITORY = AppDataSource.getRepository(REGISTRO_PRONTO);