import { Request, Response } from "express";
import { EMPRESA } from "../entities/EMPRESA";
import { VALIDAR_CONTRATO } from "../utils/Default";
import { EMPRESA_REPOSITORY } from "../repositories/EMPRESA_REPOSITORY";

export class EMPRESA_CONTROLLER {

    async CRIAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: EMPRESA = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            DADOS.TENANT_ID = TENANT!;
            const NOVA_EMPRESA = await EMPRESA_REPOSITORY.save(DADOS);

            res.status(201).json({
                MSG: "Empresa criada com sucesso!",
                DADOS: NOVA_EMPRESA
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao processar dados! ]" });
        }
    }

    async LISTAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            const EMPRESAS = await EMPRESA_REPOSITORY.find({ where: { TENANT_ID: TENANT! } });

            res.status(200).json({
                MSG: "Empresas listadas com sucesso!",
                DADOS: EMPRESAS
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao listar dados! ]" });
        }
    }

    async ATUALIZAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: Partial<EMPRESA> = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            DADOS.TENANT_ID = TENANT!;

            const EMPRESA_ATUALIZADA = await EMPRESA_REPOSITORY.update(
                DADOS.ID!,
                { ...DADOS }
            );

            res.status(201).json({
                MSG: "Empresa atualizada com sucesso!",
                DADOS: EMPRESA_ATUALIZADA
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao atualizar dados! ]" });
        }

    }

    async DELETAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const { ID } = req.params;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            await EMPRESA_REPOSITORY.delete(parseInt(ID));
            res.status(200).json({
                MSG: "Empresa excluída com sucesso!"
            });


        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao excluir dados! ]" });
        }
    }

}