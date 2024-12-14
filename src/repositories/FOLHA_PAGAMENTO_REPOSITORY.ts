import { AppDataSource } from "../data-source";
import { FOLHA_PAGAMENTO } from "../entities/FOLHA_PAGAMENTO";

export const FOLHA_PAGAMENTO_REPOSITORY = AppDataSource.getRepository(FOLHA_PAGAMENTO);