import { Request, Response } from "express";
import { BENEFICIO } from "../entities/BENEFICIO";
import { VALIDAR_CONTRATO } from "../utils/Default";
import { BENEFICIO_REPOSITORY } from "../repositories/BENEFICIO_REPOSITORY";

export class BENEFICIO_CONTROLLER {

    async CRIAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: BENEFICIO = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            DADOS.TENANT_ID = TENANT!;

            const NOVO_BENEFICIO = await BENEFICIO_REPOSITORY.save(DADOS);

            res.status(201).json({
                MSG: "Benefício criado com sucesso!",
                DADOS: NOVO_BENEFICIO,
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

            const BENEFICIOS = await BENEFICIO_REPOSITORY.find({ where: { TENANT_ID: TENANT! } });

            res.status(200).json({
                MSG: "Benefícios listados com sucesso!",
                DADOS: BENEFICIOS
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao listar dados! ]" });
        }

    }

    async ATUALIZAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: BENEFICIO = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            const BENEFICIO_ATUALIZADO = await BENEFICIO_REPOSITORY.save({ ...DADOS, TENANT_ID: TENANT! });
            res.status(200).json({
                MSG: "Benefício atualizado com sucesso!",
                DADOS: BENEFICIO_ATUALIZADO
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

            await BENEFICIO_REPOSITORY.delete({ ID: parseInt(ID), TENANT_ID: TENANT! });
            res.status(200).json({
                MSG: "Benefício deletado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao deletar dados! ]" });
        }
    }

}