import { AppDataSource } from "../data-source";
import { FeriadoAusencia } from "../entities/FeriadoAusencia";

export const FeriadoAusenciaRepository = AppDataSource.getRepository(FeriadoAusencia);