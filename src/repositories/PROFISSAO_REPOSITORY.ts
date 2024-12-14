import { AppDataSource } from "../data-source";
import { PROFISSAO } from "../entities/PROFISSAO";

export const PROFISSAO_REPOSITORY = AppDataSource.getRepository(PROFISSAO);