import { AppDataSource } from "../data-source";
import { Funcionario } from "../entities/Funcionario";

export const FuncionarioRepository = AppDataSource.getRepository(Funcionario);