import { TENANT_REPOSITORY } from "../repositories/TENANT_REPOSITORY";

export const VALIDAR_CONTRATO = async (N_CONTRATO: string) => {
    try {
        const TENANT = await TENANT_REPOSITORY.findOne({
            where: {
                CONTRATO: N_CONTRATO
            }
        });
        if (TENANT) {
            return TENANT;
        }
        
    } catch (error) {
        console.error(error);
        return null;
    }
}