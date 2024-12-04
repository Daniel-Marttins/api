import { AppDataSource } from "../data-source";
import { Beneficio } from "../entities/Beneficio";

export const BeneficioRepository = AppDataSource.getRepository(Beneficio);