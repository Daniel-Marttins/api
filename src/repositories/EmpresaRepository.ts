import { AppDataSource } from "../data-source";
import { Empresa } from "../entities/Empresa";

export const EmpresaRepository = AppDataSource.getRepository(Empresa);