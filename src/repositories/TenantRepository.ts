import { AppDataSource } from "../data-source";
import { Tenant } from "../entities/Tenant";

export const TenantRepository = AppDataSource.getRepository(Tenant);