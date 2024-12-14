import { AppDataSource } from "../data-source";
import { DESCONTO } from "../entities/Desconto";

export const DESCONTO_REPOSITORY = AppDataSource.getRepository(DESCONTO);