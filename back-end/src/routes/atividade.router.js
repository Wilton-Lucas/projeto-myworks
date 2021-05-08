import express from 'express';
import Atividade from '../models/atividade.model';
import AtividadeController from '../controllers/atividade.controller';

const atividadeRouter = express.Router();

atividadeRouter.get('/atividade', (req, res, next) => {
    try {
        res.status(200).json(new AtividadeController().listar());

    } catch (error) {
        next(error);
    }
});

atividadeRouter.get('/atividade/:id', (req, res, next) => {
    try {
        res.status(200).json(new AtividadeController().listarId(req.params.id));
    } catch (error) {
        next(error);
    }
});

atividadeRouter.post('/atividade', (req, res, next) => {
    try {
        res.status(201).json(new AtividadeController().inserir(req.body));

    } catch (error) {
        next(error);
    }
});

atividadeRouter.put('/atividade/:id', (req, res, next) => {
    try {
        res.status(200).json(new AtividadeController().alterar(req.params.id, req.body));
    } catch (error) {
        next(error);
    }
});

atividadeRouter.delete('/atividade/:id', (req, res, next) => {
    try {
        res.status(200).json(new AtividadeController().excluir(req.params.id));

    } catch (error) {
        next(error);
    }
});

export default atividadeRouter;