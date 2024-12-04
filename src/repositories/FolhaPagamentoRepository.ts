import { AppDataSource } from "../data-source";
import { FolhaPagamento } from "../entities/FolhaPagamento";

export const FolhaPagamentoRepository = AppDataSource.getRepository(FolhaPagamento);