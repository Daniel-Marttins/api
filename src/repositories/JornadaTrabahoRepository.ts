import { AppDataSource } from "../data-source";
import { JornadaTrabalho } from "../entities/JornadaTrabalho";

export const JornadaTrabahoRepository = AppDataSource.getRepository(JornadaTrabalho);