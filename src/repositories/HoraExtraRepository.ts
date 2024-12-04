import { AppDataSource } from "../data-source";
import { HoraExtra } from "../entities/HoraExtra";

export const HoraExtraRepository = AppDataSource.getRepository(HoraExtra);