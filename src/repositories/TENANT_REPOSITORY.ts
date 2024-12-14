import { AppDataSource } from "../data-source";
import { TENANT } from "../entities/TENANT";

export const TENANT_REPOSITORY = AppDataSource.getRepository(TENANT);