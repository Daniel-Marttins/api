import { AppDataSource } from "../data-source";
import { JORNADA_TRABALHO } from "../entities/JORNADA_TRABALHO";

export const JORNADA_TRABALHO_REPOSITORY = AppDataSource.getRepository(JORNADA_TRABALHO);