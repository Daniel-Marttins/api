import CFonts from 'cfonts';
import cors from 'cors';
import express from "express";
import { AppDataSource } from "./data-source";
import routes from './routes';

const PORT = parseInt(process.env.PORT as string);

AppDataSource.initialize().then(() => {
    const app = express();
    
    app.use(express.json());

    app.use(cors());
    
    app.use(routes); 

    app.listen(PORT, () => {
        CFonts.say('TM SISTEMAS', {
            font: 'block',              // Estilo de fonte
            align: 'left',              // Alinhamento do texto
            colors: ['blue'],           // Cores do texto
            background: 'black',        // Cor de fundo
            letterSpacing: 1,           // Espaçamento entre as letras
            lineHeight: 1,              // Altura das linhas
            space: true,                // Adiciona espaço em volta
            maxLength: '0',             // Largura máxima (sem limite)
        });

        CFonts.say(`API rodando na porta: ${PORT}`, {
            font: 'console',            // Estilo da fonte para o subtítulo
            align: 'left',              // Alinhamento centralizado
            colors: ['green'],          // Cor verde para o subtítulo
            background: 'transparent',  // Sem fundo
            letterSpacing: 1,           // Menor espaçamento entre as letras
            lineHeight: 1,              // Altura da linha
            space: true,                // Espaçamento extra ao redor
            maxLength: '0',             // Sem limite de largura
        });
    });

});


