import { AppDataSource } from "../data-source";
import { FUNCIONARIO } from "../entities/FUNCIONARIO";

export const FUNCIONARIO_REPOSITORY = AppDataSource.getRepository(FUNCIONARIO);