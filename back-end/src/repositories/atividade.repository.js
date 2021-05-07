import Atividade from '../models/atividade.model';

const atividades = [];

class AtividadeRepository {

    constructor() {
        atividades.push(new Atividade("Java Web", "aprender java para web", "2 semanas", 1));
        atividades.push(new Atividade("JavaScript", "aprender javascript", "2 semanas", 1));


    }

    inserir(atividade) {
        atividades.push(atividade);
        return atividade;
    }

    excluir(id) {
        const idx = atividades.findIndex((elem) => { id === elem.id });
        atividades.splice(idx, 1);
        return id;
    }

    listarId(id) {
        const atv = atividades.find((elem) => elem.id === id);
        console.log('***' + atv);
        return atv;

    }

    listar() {
        return atividades;
    }

    alterar(atividade) {
        const idx = atividades.findIndex((elem) => atividade.id === elem.id);
        atividades[idx] = atividade;
        return atividade;
    }





}

export default new AtividadeRepository();