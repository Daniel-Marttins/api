import { AppDataSource } from "../data-source";
import { HORA_EXTRA } from "../entities/HORA_EXTRA";

export const HORA_EXTRA_REPOSITORY = AppDataSource.getRepository(HORA_EXTRA);