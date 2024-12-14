import { AppDataSource } from "../data-source";
import { BENEFICIO } from "../entities/Beneficio";

export const BENEFICIO_REPOSITORY = AppDataSource.getRepository(BENEFICIO);