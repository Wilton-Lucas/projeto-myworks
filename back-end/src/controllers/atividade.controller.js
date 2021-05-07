import Atividade from '../models/atividade.model';
import AtividadeRepository from '../repositories/atividade.repository';

export default class AtividadeController {

    inserir(atividade) {
        //fazer a validação do campo
        return AtividadeRepository.inserir(new Atividade(atividade.titulo, atividade.descricao, atividade.periodo, atividade.estagio, atividade.isImportante));
    }

    excluir(id) {
        return AtividadeRepository.excluir(id);
    }

    listarId(id) {
        return AtividadeRepository.listarId(id);

    }

    listar() {
        return AtividadeRepository.listar();
    }

    alterar(id, atividade) {
        atividade.id = id;
        return AtividadeRepository.alterar(atividade);
    }
}