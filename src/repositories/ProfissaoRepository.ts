import { AppDataSource } from "../data-source";
import { Profissao } from "../entities/Profissao";

export const ProfissaoRepository = AppDataSource.getRepository(Profissao);