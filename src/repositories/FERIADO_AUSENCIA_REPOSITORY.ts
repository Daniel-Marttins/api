import { AppDataSource } from "../data-source";
import { FERIADO_AUSENCIA } from "../entities/FERIADO_AUSENCIA";

export const FERIADO_AUSENCIA_REPOSITORY = AppDataSource.getRepository(FERIADO_AUSENCIA);