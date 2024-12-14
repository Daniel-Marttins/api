import { Request, Response } from "express";
import { DESCONTO } from "../entities/DESCONTO";
import { VALIDAR_CONTRATO } from "../utils/Default";
import { DESCONTO_REPOSITORY } from "../repositories/DESCONTO_REPOSITORY";

export class DESCONTO_CONTROLLER {

    async CRIAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: DESCONTO = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            DADOS.TENANT_ID = TENANT!;
            const NOVO_DESCONTO = await DESCONTO_REPOSITORY.save(DADOS);
            res.status(201).json({
                MSG: "Desconto criado com sucesso!",
                DADOS: NOVO_DESCONTO
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

            const DESCONTOS = await DESCONTO_REPOSITORY.find({ where: { TENANT_ID: TENANT! } });
            res.status(200).json({
                MSG: "Descontos listados com sucesso!",
                DADOS: DESCONTOS
            });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao listar dados! ]" });
        }
    }

    async ATUALIZAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const DADOS: DESCONTO = req.body;

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            DADOS.TENANT_ID = TENANT!;
            const DESCONTO_ATUALIZADO = await DESCONTO_REPOSITORY.update(
                DADOS.ID,
                { ...DADOS }
            );

            res.status(201).json({
                MSG: "Desconto atualizado com sucesso!",
                DADOS: DESCONTO_ATUALIZADO
            });


        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao processar dados! ]" });
        }
    }
    
    async DELETAR(req: Request, res: Response) {
        const { N_CONTRATO } = req.headers;
        const ID = parseInt(req.params.id);

        try {
            const TENANT = await VALIDAR_CONTRATO(N_CONTRATO as string);
            if (typeof TENANT === "string") {
                return res.status(400).json({ message: TENANT });
            }

            await DESCONTO_REPOSITORY.delete({ ID, TENANT_ID: TENANT! });
            res.status(200).json({
                MSG: "Desconto deletado com sucesso!"
            });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "FALHA INTERNA: [ Erro ao deletar dados! ]" });
        }
    }

}