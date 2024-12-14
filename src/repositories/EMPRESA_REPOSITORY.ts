import { AppDataSource } from "../data-source";
import { EMPRESA } from "../entities/EMPRESA";

export const EMPRESA_REPOSITORY = AppDataSource.getRepository(EMPRESA);